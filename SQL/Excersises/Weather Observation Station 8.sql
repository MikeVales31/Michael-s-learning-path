--Weather Observation Station 8 (hackerrank)
SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP '^[aeiou]' AND CITY REGEXP '[aeiou]$'

