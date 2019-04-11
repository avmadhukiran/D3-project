
CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  product_id character varying(50),
  product_date character varying(50) ,
  product_location character varying(50),
  product_onHandQty numeric,
  product_unitcost real,
  product_onHandValue real
)

-- show datestyle
-- SET datestyle = "ISO, DMY";

COPY products(product_id, product_date,product_location,product_onHandQty,product_unitcost,product_onHandValue) 
FROM 'D:\Projects\opex\zip files\Daily Inventory.csv' DELIMITER ',' CSV HEADER;


select sum(product_onHandvalue),product_date from products group by product_date

select distinct product_date from products

SET datestyle = mdy;

ALTER TABLE products ALTER COLUMN product_date TYPE DATE 
using to_date(product_date, 'MM-DD-YYYY');