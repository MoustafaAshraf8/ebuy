create table client_order
(
   clientorderid serial,
   clientid integer,
   total_price float default 0.0,
   constraint clientorder_clientorderid_pk primary key (clientorderid),
   constraint clientorder_clientid_fk foreign key (clientid) references client (clientid)
);