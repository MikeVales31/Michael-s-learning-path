/*
Triggers

A block of SQL code that automatically gets executed before or after an
INSERT, UPDATE or DELETE statements.

We need to change the default delimiter 
DELIMITER $$

Example:

DELIMITER $$
CREATE TRIGGER payments_after_delete
	AFTER DELETE ON payments
    FOR EACH ROW 
BEGIN 
	UPDATE invoices 
    SET payment_total = payment_total - OLD.amount
    WHERE invoice_id = OLD.invoice_id;
END $$

DELIMITER ;
*/