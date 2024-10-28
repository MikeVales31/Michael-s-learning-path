-- Weather Observation Station 12 (hackerrank) 

SELECT DISTINCT CITY
FROM STATION
WHERE (CITY NOT REGEXP '^[aeiou]') AND (CITY NOT REGEXP '[aeiou]$')