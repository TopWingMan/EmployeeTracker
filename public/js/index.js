inquirer = require('inquirer');
connection = require("../../config/connection")
require('console.table');

const startingChoices = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'];

const Menu = () => {
    inquirer
    .prompt
    ([
        {
            type: 'list',
            name: 'answer',
            message: 'What would you like to do?',
            choices: startingChoices
        },
    ])
    .then((data) =>
    {
        if (data.answer === 'View All Employees') {
            ViewAllEmployees();
        }
        else if (data.answer === 'Add Employee') {
            AddEmployee();
        }
        else if (data.answer === 'Update Employee Role') {
            UpdateEmployeeRole();
        }
        else if (data.answer === 'View All Roles') {
            ViewAllRoles();
        }
        else if (data.answer === 'Add Role') {
            AddRole();
        }
        else if (data.answer === 'View All Departments') {
            ViewAllDepartments();
        }
        else if (data.answer === 'Add Department') {
            AddDepartment();
        }
        else if (data.answer === 'Quit') {

        }
    })
}

const ViewAllDepartments = () => {
    connection.query('SELECT * FROM department', 
    function(err, results) {
        console.table(results);
    })
    Menu();
}

const ViewAllRoles = () => {
    connection.query('SELECT * FROM rolee', 
    function(err, results) {
        console.table(results);
    })
    Menu();
}

const ViewAllEmployees = () => {
    connection.query('SELECT * FROM employee', 
    function(err, results) {
        console.table(results);
    })
    Menu();
}

const UpdateEmployeeRole = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'id',
            message: 'Which employee would you like to update?',
        },
        {
            type: 'input',
            name: 'role',
            message: 'What role would you like to give this employee?',
        },
    ])
    .then((data) =>
    {
        connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [data.role, data.id ],
        function(err, results) {
            if (err) {throw err;}
            ViewAllEmployees();
        })
    })
}

const AddDepartment = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
        },
    ])
    .then((data) =>
    {
        var sql = "INSERT INTO department (department_name) VALUES ?";
        var values = [[data.name],];
        //Create a department with set name
        connection.query(sql, [values], function (err, results) {
            //tell results and go back to menu
            console.log('Added department ' + data.name);
            Menu();
        })
    })
}

const AddRole = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'input',
            name: 'department',
            message: 'What department does the role belong to?',
        },
    ])
    .then((data) =>
    {
        var sql = "INSERT INTO rolee (title, salary, department_id) VALUES ?";
        var values = [[data.name, data.salary, data.department]];
        //Create a rolee with set data
        connection.query(sql, [values], function (err, results) {
            //tell results and go back to menu
            console.log('Added role ' + data.name);
            Menu();
        })
    })        
}

const AddEmployee = () => {
    inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'first',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'last',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the employee's role?",
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?",
        },
    ])
    .then((data) =>
    {
        var sql = "INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ?";
        var values = [[data.first, data.last, data.manager, data.role]];
        //Create a employee with set data
        connection.query(sql, [values], function (err, results) {
            //tell results and go back to menu
            console.log('Added employee ' + data.first + " " + data.last);
            Menu();
        })
    })              
}

Menu();