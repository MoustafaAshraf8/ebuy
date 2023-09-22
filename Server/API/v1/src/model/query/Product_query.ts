export class Product_query {
  public static getProductByIdQuery(productid: number) {
    const query = `
   select
      --product
      product.productid as product_productid,
      product.sellerid as product_sellerid,
      product.name as product_name,
      product.price as product_price,
      product.quantity as product_quantity,
      product.discount as product_discount,
      product.category as product_category,
      product.description as product_description,
   
      --seller
      sellerinformation.*,
   
      -- --client
      clientinformation.*,
   
      --product_review
      product_review.comment_heading as productreview_comment_heading,
      product_review.clientid as productreview_clientid,
      product_review.comment_body as productreview_comment_body,
      product_review.rating as productreview_rating
   
   from
   product left join product_review
   on product.productid=product_review.productid
   
   left join
   (
      select
      person.id as seller_id,
      person.name as seller_name,
      person.email as seller_email,
      person.password as seller_password,
      person.phone as seller_phone,
      person.address as seller_address
   
      from person inner join seller
      on person.id=seller.sellerid
   ) as sellerinformation
   
   on product.sellerid=sellerinformation.seller_id
   left join
   (
      select
      person.id as client_id,
      person.name as client_name,
      person.email as client_email,
      person.password as client_password,
      person.phone as client_phone,
      person.address as client_address
   
      from person inner join client
      on person.id=client.clientid
   ) as clientinformation
   
   on product_review.clientid=clientinformation.client_id
   
   where product.productid=${productid};
   `;
    return query;
  }

  public static getAllProductQuery() {
    const query = `
   select
      --product
      product.productid as product_productid,
      product.sellerid as product_sellerid,
      product.name as product_name,
      product.price as product_price,
      product.quantity as product_quantity,
      product.discount as product_discount,
      product.category as product_category,
      product.description as product_description,
   
      --seller
      sellerinformation.*,
   
      -- --client
      clientinformation.*,
   
      --product_review
      product_review.comment_heading as productreview_comment_heading,
      product_review.clientid as productreview_clientid,
      product_review.comment_body as productreview_comment_body,
      product_review.rating as productreview_rating
   
   from
   product left join product_review
   on product.productid=product_review.productid
   
   left join
   (
      select
      person.id as seller_id,
      person.name as seller_name,
      person.email as seller_email,
      person.password as seller_password,
      person.phone as seller_phone,
      person.address as seller_address
   
      from person inner join seller
      on person.id=seller.sellerid
   ) as sellerinformation
   
   on product.sellerid=sellerinformation.seller_id
   left join
   (
      select
      person.id as client_id,
      person.name as client_name,
      person.email as client_email,
      person.password as client_password,
      person.phone as client_phone,
      person.address as client_address
   
      from person inner join client
      on person.id=client.clientid
   ) as clientinformation
   
   on product_review.clientid=clientinformation.client_id
   order by product.productid;
    `;

    return query;
  }

  public static createProductQuery(
    sellerid: number,
    name: string,
    price: number,
    quantity: number,
    discount: number,
    category: string,
    description: string
  ) {
    const query = `
   begin;

   insert into product
   (sellerid, name, price, quantity, discount, category, description)
   values
   (${sellerid}, '${name}', ${price}, ${quantity}, ${discount}, '${category}', '${description}');
   
   select
      --product
      product.productid as product_productid,
      product.sellerid as product_sellerid,
      product.name as product_name,
      product.price as product_price,
      product.quantity as product_quantity,
      product.discount as product_discount,
      product.category as product_category,
      product.description as product_description,
   
      --seller
      sellerinformation.*,
   
      --client
      clientinformation.*,
   
      --product_review
      product_review.comment_heading as productreview_comment_heading,
      product_review.clientid as productreview_clientid,
      product_review.comment_body as productreview_comment_body,
      product_review.rating as productreview_rating
   
   from
   product left join product_review
   on product.productid=product_review.productid
   
   left join
   (
      select
      person.id as seller_id,
      person.name as seller_name,
      person.email as seller_email,
      person.password as seller_password,
      person.phone as seller_phone,
      person.address as seller_address
   
      from person inner join seller
      on person.id=seller.sellerid
   ) as sellerinformation
   
   on product.sellerid=sellerinformation.seller_id
   left join
   (
      select
      person.id as client_id,
      person.name as client_name,
      person.email as client_email,
      person.password as client_password,
      person.phone as client_phone,
      person.address as client_address
   
      from person inner join client
      on person.id=client.clientid
   ) as clientinformation
   
   on product_review.clientid=clientinformation.client_id
   
   where product.productid=currval(pg_get_serial_sequence('product','productid'));
   
   commit;
    `;

    return query;
  }

  public static removeProductQuery(productid: number, sellerid: number) {
    const query = `
      delete from product
      where product.productid=${productid} and product.sellerid=(
         select sellerid
         from seller
         where sellerid=${sellerid}
      );
   `;

    return query;
  }
}
