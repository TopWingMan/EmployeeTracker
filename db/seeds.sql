USE employees_db;

-- 1
INSERT INTO department (department_name) 
VALUES ("lackey"),
       ("lackey");

INSERT INTO rolee (title, salary, department_id) 
VALUES ("web-designer", 50000, 1),
       ("manager", 60000, 2);

INSERT INTO employee (first_name, last_name, manager_id, role_id) 
VALUES ("zach", "stan", 0, 1),
       ("john", "poo", 0, 2);

SELECT * FROM department;
SELECT * FROM rolee;
SELECT * FROM employee;