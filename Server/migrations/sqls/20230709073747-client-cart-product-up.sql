create table client_cart_product
(
   cartid integer,
   productid integer,
   quantity integer default 1,
   constraint clientcartproduct_cartid_fk foreign key (cartid) references client_cart (cartid) on delete cascade,
   constraint clientcartproduct_productid_fk foreign key (productid) references product (productid) on delete cascade,
   constraint clientcartproduct_pk primary key (cartid, productid)
);