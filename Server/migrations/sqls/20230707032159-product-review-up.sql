create table product_review
(
   product_id integer,
   client_id integer,
   comment_heading varchar(20) default null,
   comment_body text default null,
   rating float default 0,
   constraint product_foreign_key foreign key (product_id) references product (id) on delete cascade,
   constraint client_foreign_key foreign key (client_id) references client (id) on delete cascade,
   constraint pk primary key (product_id, client_id)
);