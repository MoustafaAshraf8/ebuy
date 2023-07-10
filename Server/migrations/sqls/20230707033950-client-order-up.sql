create table client_order
(
   id serial primary key,
   client_id integer,
   total_price float default 0.0,
   constraint client_reference foreign key (client_id) references client (id)
);