create table product_review
(
   productid integer,
   clientid integer,
   comment_heading varchar(20) default null,
   comment_body text default null,
   rating float default 0,
   constraint productreview_productid_fk foreign key (productid) references product (productid) on delete cascade,
   constraint productreview_clientid_fk foreign key (clientid) references client (clientid) on delete cascade,
   constraint pk primary key (productid, clientid)
);