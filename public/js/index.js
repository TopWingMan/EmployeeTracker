const inquirer = require('inquirer');

const questions = ["What would you like to do?"];
const startingChoices = ['View All Employees', 'Add Employee',
'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments',
'Add Department', 'Quit'];

inquirer
    .prompt
    ([
        {
            type: 'list',
            name: 'start',
            message: questions[0],
            choices: startingChoices
        },
    ])
    .then((data) =>
    {
        // Use data to do something
        if (data.start === 'View All Employees') {
            console.log('view employee');
        }
        else if (data.start === 'Add Employee') {
            console.log('add empoyee');
        }
        else if (data.start === 'Update Employee Role') {
            console.log('update employ role');
        }
        else if (data.start === 'View All Roles') {
            console.log('view roles');
        }
        else if (data.start === 'Add Role') {
            console.log('add roles');
        }
        else if (data.start === 'View All Departments') {
            console.log('view departments');
        }
        else if (data.start === 'Add Department') {
            console.log('add department');
        }
        else if (data.start === 'Quit') {
            console.log("Quiting Out");
        }
    })