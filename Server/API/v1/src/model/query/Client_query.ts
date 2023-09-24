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
}
