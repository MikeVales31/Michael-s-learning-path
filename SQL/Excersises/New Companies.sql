-- New Companies (hackerrank)

SELECT 
    t.company_code,
    t.founder,
    COUNT(DISTINCT t.lead_manager_code),
    COUNT(DISTINCT t.senior_manager_code),
    COUNT(DISTINCT t.manager_code),
    COUNT(DISTINCT t.employee_code)
FROM (
    SELECT 
        c.company_code,
        c.founder,
        e.lead_manager_code,
        e.senior_manager_code,
        e.manager_code,
        e.employee_code
    FROM employee e
    JOIN company c USING (company_code)
) AS t
GROUP BY t.company_code, t.founder


