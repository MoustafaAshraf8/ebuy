create table seller
(
   id serial primary key,
   name varchar(50) default 'seller',
   email varchar(50) not null,
   password varchar(50) not null,
   phone varchar(50),
   address varchar(50)
);
