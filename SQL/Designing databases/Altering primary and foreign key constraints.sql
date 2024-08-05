/*
Altering primary and foreign key contraints

You can use tha ALTER statement in order to add or drop a primary key,
when you are dropping a primary key you don't have to specify the columns.

Example:
ALTER TABLE orders
	ADD PRIMARY KEY (order_id),
    DROP PRIMARY KEY, 
	DROP FOREIGN KEY fk_orders_customers,
    ADD FOREIGN KEY fk_orders_customers(customer_id)
		REFERENCES customers (customer_id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
*/