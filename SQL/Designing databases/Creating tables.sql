/*
Creating tables 

CREATE TABLE "name" 
(
    "name of the column" "data type" "attributes",
    "name of the column" "data type" "attributes",
    "name of the column" "data type" "attributes",
    ...
);

Example:

USE sql_store2;

CREATE TABLE IF NOT EXISTS customers
(
	customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name  VARCHAR(50) NOT NULL,
    points      INT NOT NULL DEFAULT 0,
    email       VARCHAR(255) NOT NULL UNIQUE 
);
*/