/*
Creating a stored procedure

Use the command CREATE PROCEDURE "name"()
Use the BEGIN and END keywords -> the body of stored procedure.
We change the default delimiter with the keyword DELIMITER $$ 
And then repit the $$ after END.
Finally we change the delimiter again to ;

We can call the stored procedure using CALL "name of the procedure"()

Example:

DELIMITER $$
CREATE PROCEDURE get_invoices_with_balance()
BEGIN 
	SELECT * 
    FROM invoices_with_balance
    WHERE balance > 0;
END $$

DELIMITER ;


Then we call it.
CALL get_invoices_with_balance()

 
*/