create table seller
(
   sellerid integer,
   constraint seller_sellerid_fk foreign key (sellerid) references person (id),
   constraint seller_sellerid_pk primary key (sellerid)
);
