export class Seller_query {
  public static signupQuery(
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String
  ): string {
    const query = `
    begin;
       insert into person
       (name,email,password,phone,address)
       values
       ('${name}','${email}','${password}','${phone}','${address}');
       
       insert into seller
       (sellerid)
       values
       (currval(pg_get_serial_sequence('person','id')));
    
       select
       person.id as person_id,
       person.name as person_name,
       person.email as person_email,
       person.password as person_password,
       person.phone as person_phone,
       person.address as person_address
       from person inner join seller
       on person.id=seller.sellerid
       where person.id=currval(pg_get_serial_sequence('person','id')); 
    commit;
    `;

    return query;
  }

  public static signinQuery(email: string) {
    const query = `
         select
         person.id as person_id,
         person.name as person_name,
         person.email as person_email,
         person.password as person_password,
         person.phone as person_phone,
         person.address as person_address
         from person inner join seller
         on person.id=seller.sellerid
         where person.email='${email}';
      `;

    return query;
  }
}
