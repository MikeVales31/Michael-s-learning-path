--Weather Observation Station 17 (hackerrank)   

SELECT ROUND(LONG_W, 4)
FROM STATION
WHERE LAT_N = (
    SELECT LAT_N
    FROM STATION
    WHERE LAT_N > 38.7780
    ORDER BY LAT_N
    LIMIT 1
)
