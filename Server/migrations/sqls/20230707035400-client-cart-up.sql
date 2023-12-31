create table client_cart
(
   cartid serial primary key,
   clientid integer,
   constraint clientcart_clientid_fk foreign key (clientid) references client (clientid) on delete cascade,
   constraint clientcart_pk unique (cartid, clientid)
);