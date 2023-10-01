create table client_order_item
(
   clientorderid integer,
   productid integer,
   quantity integer default 1,
   constraint clientorderitem_clientorderid_fk foreign key (clientorderid) references client_order (clientorderid) on delete cascade,
   constraint clientorderitem_productid_fk foreign key (productid) references product (productid) on delete cascade,
   constraint clientorderitem_pk primary key (clientorderid, productid)
);