--Weather Observation Station 16 (hackerrank)

SELECT ROUND(LAT_N, 4)
FROM (
    SELECT LAT_N
    FROM STATION
    WHERE LAT_N > 38.7780
) AS options
ORDER BY LAT_N
LIMIT 1
