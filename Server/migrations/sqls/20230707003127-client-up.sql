create table client
(
   id serial primary key,
   name varchar(50) default 'client',
   email varchar(50) unique,
   password varchar(100) not null,
   phone varchar(50),
   address varchar(50)
);
