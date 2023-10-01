export class Client_query {
  public static signup_query(
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String
  ): string {
    const query = `
    begin;
   --person
   insert into person
   (name,email,password,phone,address)
   values
   ('${name}','${email}','${password}','${phone}','${address}');
   
   --client
   insert into client
   (clientid)
   values
   (currval(pg_get_serial_sequence('person','id')));
   
   --client_payment
   insert into client_payment
   (clientid)
   values
   (currval(pg_get_serial_sequence('person','id')));
   
   --client_cart
   insert into client_cart
   (clientid)
   values
   (currval(pg_get_serial_sequence('person','id')));

   select
   person.id as person_id,
   person.name as person_name, 
   person.email as person_email,
   person.password as person_password,
   person.phone as person_phone,
   person.address as person_address
   from
   person inner join client
   on person.id=client.clientid
   where person.id=currval(pg_get_serial_sequence('person','id'));
   commit;
   `;

    return query;
  }

  public static signin_query(email: string) {
    const query = `
   select
   person.id as person_id,
   person.name as person_name,
   person.email as person_email,
   person.password as person_password,
   person.phone as person_phone,
   person.address as person_address
   from person inner join client
   on person.id=client.clientid
   where person.email='${email}';
`;

    return query;
  }

  public static getCartItems_query(clientid: number) {
    const query = `
   select
   product.productid as product_productid,
   product.name as product_name,
   product.price as product_price,
   
   client_cart_product.quantity as product_quantity
   
   from client inner join client_cart
   on client.clientid=client_cart.clientid
   
   inner join client_cart_product
   on client_cart_product.cartid=client_cart.cartid
   
   inner join product
   on product.productid=client_cart_product.productid
   
   where client.clientid=${clientid};
   `;

    return query;
  }

  public static addToCart_query(
    clientid: number,
    productid: number,
    quantity: number
  ) {
    const query = `
   insert into client_cart_product
   (cartid, productid, quantity)
   values
   (
      (
         select client_cart.cartid
         from client_cart
         where client_cart.clientid = ${clientid}
      ),
      (
         select productid
         from product
         where productid=${productid}
      ),
      ${quantity}
   ) returning *;
   `;

    return query;
  }

  public static deleteFromCart_query(clientid: number, productid: number) {
    const query = `
    delete from client_cart_product

    where client_cart_product.productid = ${productid}
    
    and client_cart_product.cartid = (
       select cartid
       from client_cart
       where clientid=${clientid}
    ) returning *;
    `;

    return query;
  }

  public static updateCartItem_query(
    clientid: number,
    productid: number,
    quantity: number
  ) {
    const query = `
    update client_cart_product
    set quantity=${quantity}
    where productid=${productid} and cartid=(
       select cartid
       from client_cart
       where clientid=${clientid}
    )
    `;

    return query;
  }
}
