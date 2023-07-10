create table product
(
   id serial primary key,
   seller_id integer,
   name varchar(20) default 'product',
   price float default 0.0,
   quantity integer default 0,
   discount float default 0.0,
   category varchar(50) default 'general',
   description text default null,
   constraint seller_refrence foreign key (seller_id) references seller (id) on delete cascade
);