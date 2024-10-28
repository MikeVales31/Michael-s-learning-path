--Draw The Triangle 1 (hackerrank)

DELIMITER $$
CREATE PROCEDURE triangle()
BEGIN
    DECLARE stars INT ;
    SET stars = 20;
    
    WHILE(stars > 0)
    DO
        SELECT
            REPEAT("* ", stars );
        SET stars = stars - 1;
    END WHILE;
END $$

DELIMITER ;
CALL triangle();

