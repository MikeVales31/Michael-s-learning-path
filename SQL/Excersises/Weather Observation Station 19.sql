-- Weather Observation Station 19 (hackerrank)

SELECT ROUND(SQRT(POW(t.a - t.b, 2) + POW(t.c - t.d, 2)), 4)
FROM (
    SELECT 
        MIN(lat_n) AS a,
        MAX(lat_n) AS b,
        MIN(long_w) AS c,
        MAX(long_w) AS d
    FROM station
)AS t

