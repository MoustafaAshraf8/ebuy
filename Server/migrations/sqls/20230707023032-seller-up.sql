create table seller
(
   sellerid integer,
   constraint seller_sellerid_fk foreign key (sellerid) references person (id) on delete cascade,
   constraint seller_sellerid_pk primary key (sellerid)
);
