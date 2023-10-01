-- DELETE client_cart_product
--    from
--    client_cart_product inner join client_cart
--    on client_cart.id=client_cart_product.cart_id
-- where client_cart_product.product_id=1 and client_cart.client_id=1;

-- delete client_cart_product.*
-- from
-- (client_cart_product inner JOIN client_cart) on client_cart.id=client_cart_product.cart_id
-- WHERE client_cart_product.product_id=1 and client_cart.client_id=1;

-- DELETE client_cart_product
--   FROM client_cart_product
--  INNER JOIN client_cart ON client_cart.id=client_cart_product.cart_id
--  WHERE where client_cart.client_id=1;


-- define TABLE client;

-- delete from client_cart_product
-- WHERE client_cart_product INNER JOIN client_cart ON client_cart_product.cart_id=client_cart.id and client_cart.client_id=1;
-- -- WHERE client_cart_product.product_id = 1;


-- delete from client_cart_product
-- using (select * from client_cart where client_cart.client_id=1) result
-- where result.id=client_cart_product.cart_id and client_cart_product.product_id=2
-- returning *;


UPDATE client_cart_product
SET quantity = 50
FROM client_cart
WHERE client_cart.client_id=1 and client_cart_product.cart_id = client_cart.id and client_cart_product.product_id = 2;