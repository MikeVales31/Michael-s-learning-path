-- Weather Observation Station 18 (hackerrank)

SELECT ROUND (ABS(p.a - p.c) + ABS(p.b - p.d), 4)
FROM (
    SELECT 
        MIN(lat_n) AS a,
        MIN(long_w) AS b,
        MAX(lat_n) AS c,
        MAX(long_w) AS d
    FROM station
) AS  p

