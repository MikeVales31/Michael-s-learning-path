/*
Functions 

functions are similar to stored procedures but the main difference is that a function 
only return a single value. We need to set the attributes of a function (DETERMINISTIC,
READS SQL DATA, MODIFIES SQL DATA)
DETERMINISTIC: which means if we give the function the same set of values, it always return the 
same value

READS SQL DATA: and this means you will have a select statement in your function, to read some
data.

MODIFIES SQL DATA: that means you are going to have a INSERT, UPDATE or DELETE statement  in the 
function.

Note: the function can have more than 1 attribute.

Example:
CREATE DEFINER=`root`@`localhost` FUNCTION `get_risk_factor_for_client`(
	client_id INT
) RETURNS int
    READS SQL DATA
BEGIN
	DECLARE risk_factor DECIMAL(9, 2) DEFAULT 0;
    DECLARE invoices_total DECIMAL(9, 2);
    DECLARE invoices_count INT;
    
    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices i
    WHERE i.client_id = client_id;
    
    SET risk_factor = invoices_total/ invoices_count * 5;

RETURN IFNULL(risk_factor,0);
END


We can drop a function using
DROP FUNCTION IF EXISTS "name of the function"
*/