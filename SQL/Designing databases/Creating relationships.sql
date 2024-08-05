/*
Creating relationships

To define a relationship between 2 different columns, after you create it apply 
the FOREIGN KEY "name"("the columns you want"), then the REFERENCE "table"(column),
after that ON UPDATE "option" and finally ON DELETE "option".

The convention to a foreign key is fk_"foreign key table"_"primary key table"

Example:

CREATE TABLE orders
(
	order_id 	INT PRIMARY KEY,
    customer_id INT NOT NULL,
    FOREIGN KEY fk_orders_customers(customer_id)
		REFERENCES customers (customer_id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION 
);

*/