--Weather Observation Station 13 (hackerrank)

SELECT
    TRUNCATE (SUM(LAT_N), 4)
FROM (SELECT LAT_N
        FROM STATION
        WHERE LAT_N BETWEEN 38.7880 AND 137.2345
      ) AS options
