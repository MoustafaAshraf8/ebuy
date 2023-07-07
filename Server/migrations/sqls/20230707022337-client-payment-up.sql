create table client_payment
(
   cid integer,
   wallet float default 0.0,
   card varchar(10) default null,
   constraint client_ref foreign key (cid) references client (id)
);