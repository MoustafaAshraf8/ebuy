create table client_cart
(
   client_id integer,
   product_id integer,
   amount integer default 1,
   constraint client_id_reference foreign key (client_id) references client (id),
   constraint product_id_reference foreign key (product_id) references product (id),
   constraint client_product_cart_primary_key primary key (client_id, product_id)
);