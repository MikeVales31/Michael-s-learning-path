--Weather Observation Station 14 (hackerrank)

SELECT 
    TRUNCATE(MAX(LAT_N), 4)
FROM STATION
WHERE LAT_N < 137.2345
