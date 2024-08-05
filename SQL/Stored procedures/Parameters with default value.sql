/*
Parameters with default value

To make a default value we use the If statement in the begin of the body,
with the condition THEN and set the attribute and END IF statement.
Or the IFNULL command.

Example:

DELIMITER $$
CREATE PROCEDURE get_clients_by_state
(
state CHAR(2) 
)
BEGIN 
	IF state IS NULL THEN
		SET state = 'CA';
	END IF;
    
	SELECT * 
    FROM clients c
    WHERE c.state = state;
END $$

DELIMITER ;

*/