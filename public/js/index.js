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
        // Use data to do something
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
            console.log("Quit");
        }
    })
}

const ViewAllDepartments = () => {
        
}

const ViewAllRoles = () => {
        
}

const ViewAllEmployees = () => {
    connection.query('SELECT * FROM employee', 
    function(err, results) {
        console.table(results);
    })
}

const UpdateEmployeeRole = () => {
        
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
        //Create a department with set name
        console.log(data.name);
        //Go back to menu
        Menu();
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
        //Create a role with set name, salary and department
        console.log(`role name is ${data.name}, salary is ${data.salary}, department is ${data.department}.`);
        //Go back to menu
        Menu();
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
            name: 'name',
            message: "What is the employee's role?",
        },
        {
            type: 'input',
            name: 'name',
            message: "Who is the employee's manager?",
        },
    ])
    .then((data) =>
    {
        //Create a role with set name
        console.log(data.name);
        //Go back to menu
        Menu();
    })              
}

Menu();