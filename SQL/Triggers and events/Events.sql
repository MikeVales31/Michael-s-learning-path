/*
Events

Is a task or block of SQL code that gets executed according to a schedule.

So with events we can automate databases maintenance tasks such as deleting stale data,
copying data from one table into an archived table or aggregating data to generate reports.

We create with CREATE EVENT 'name' statement, then we use ON SCHEDULE statement, 
we put the period of time if it will be only once we use AT and the date, if you need more 
than onece we use  the EVERY # YEAR/MONTH/HOUR. We can specify an start time and end time.
Then we type DO BEGIN END.

Example:

DELIMITER $$

CREATE EVENT yearly_delete_stale_audit_rows
ON SCHEDULE
	-- AT '2019-05-01'
    EVERY 1 YEAR STARTS '2019-01-01' ENDS '2029-01-01'
DO BEGIN 
	DELETE FROM payments_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END $$

DELIMITER ;
*/