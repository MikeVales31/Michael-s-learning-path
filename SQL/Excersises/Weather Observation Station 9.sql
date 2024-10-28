--Weather Observation Station 9 (hackerrank)

SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT REGEXP '^[aeiouAEIOU]'
