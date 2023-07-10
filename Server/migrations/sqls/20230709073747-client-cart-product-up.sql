create table client_cart_product
(
   cart_id integer,
   product_id integer,
   quantity integer default 1,
   constraint cart_foreign_key foreign key (cart_id) references client_cart (id) on delete cascade,
   constraint product_foreign_key foreign key (product_id) references product (id) on delete cascade,
   constraint cart_product_primary_key primary key (cart_id, product_id)
);