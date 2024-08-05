/*
Parameter validation 

We use an if statement to validate the information at the beginning of the body,
we can use the SIGNAL SQL '#' statement and SET MESSAGE_TEXT = 'message' so with the message
throw can be easy to find were is wrong.

Example:

CREATE DEFINER=`root`@`localhost` PROCEDURE `make_payment`(
	invoice_id INT,
    payment_amount DECIMAL(9, 2),
    payment_date DATE 
)
BEGIN
	IF payment_amount <= 0 THEN 
		SIGNAL SQLSTATE '22003' 
			SET MESSAGE_TEXT = 'Invalid payment amount';
	END IF;
    
	UPDATE invoices i 
    SET 
		i.payment_total = payment_amount,
		i.payment_date = payment_date 
	WHERE i.invoice_id = invoice_id;
END
*/