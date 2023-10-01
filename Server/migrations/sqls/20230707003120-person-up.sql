create table person
(
   id serial,
   name varchar(50) default 'default_client_name',
   email varchar(50) unique,
   password varchar(100) not null,
   phone varchar(50),
   address varchar(50),
   constraint person_id_pk primary key (id)
);