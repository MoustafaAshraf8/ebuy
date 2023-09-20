create table product
(
   productid serial,
   sellerid integer,
   name varchar(20) default 'product_default_name',
   price float default 0.0,
   quantity integer default 0,
   discount float default 0.0,
   category varchar(50) default 'general',
   description text default null,
   constraint product_productid_pk primary key (productid),
   constraint seller_refrence foreign key (sellerid) references seller (sellerid) on delete cascade
);