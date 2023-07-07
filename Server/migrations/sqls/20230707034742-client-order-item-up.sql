create table client_order_item
(
   client_order_id integer,
   product_id integer,
   quantity integer default 1,
   constraint client_order_id_foreign_key foreign key (client_order_id) references client_order (id) on delete cascade,
   constraint product_id_foreign_key foreign key (product_id) references product (id) on delete cascade,
   constraint order_item_primary_key primary key (client_order_id, product_id)
);