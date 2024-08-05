/*
Altering tables 

ALTER TABLE "name"
    ADD "column name" "data type" "attribute" AFTER/BEFORE "column name",
    ADD "column name" "data type" "attribute" AFTER/BEFORE "column name",
    MODIFY COLUMN "column name" "data type" "attribute",
    DROP "column name"
    ;

Example:

ALTER TABLE customers
	ADD last_name VARCHAR(50) NOT NULL AFTER first_name,
    ADD city      VARCHAR(50) NOT NULL,
    MODIFY COLUMN first_name VARCHAR(55) DEFAULT '',
    DROP points
    ;

Note: do not alter tables or columns in production enviroments

 
*/