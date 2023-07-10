create table client_cart
(
   id serial primary key,
   client_id integer,
   constraint client_id_reference foreign key (client_id) references client (id),
   constraint cart_id_client_id_primary_key unique (id, client_id)
);