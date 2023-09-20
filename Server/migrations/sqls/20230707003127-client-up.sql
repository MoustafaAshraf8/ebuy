create table client
(
   clientid integer,
   constraint client_clientid_fk foreign key (clientid) references person (id),
   constraint client_clientid_pk primary key (clientid)
);
