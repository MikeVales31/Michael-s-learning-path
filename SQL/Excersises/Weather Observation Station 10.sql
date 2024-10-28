--Weather Observation Station 10(hackerrank)

SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT REGEXP '[aeiou]$'
