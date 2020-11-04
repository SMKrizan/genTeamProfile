const inquirer = require('inquirer');
const generateHTML = require('./src/roster-template.js');
const { writeFile } = require('./utils/generateHTML.js');

function Team() {
    this.teamMembers = {};
}

const initializeTeam = () => {
    console.log(`
    ==============================================================
    Answer these questions to add a new member to the team roster:
    ==============================================================
    `)

    return 
}

initializeTeam.prototype.name = function() {
    inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: "Enter the team member's name: "
    })
    .then (({ name }) => {
        this.employee = new Employee(name);
    })
}

initializeTeam.prototype.id = function() {
    inquirer
    .prompt({
        type: 'number',
        name: 'id',
        message: "Enter the team member's employee id:  "
    })
    .then (({ id }) => {
        this.employee.id = new Employee.id(id);
    })
}

initializeTeam.prototype.email = function() {
    inquirer
    .prompt({
        type: 'input',
        name: 'email',
        message: "Enter the team member's work email: "
    })
    .then (({ email }) => {
        this.employee.email = new Employee.email(email);
    })
}

initializeTeam.prototype.role = function() {
    inquirer
    .prompt({
        type: 'list',
        name: 'role',
        message: "Enter the team member's role: ",
        choices: ['employee', 'engineer', 'manager', 'intern']
    })
    .then (({ role }) => {
        this.employee.role = new Employee.role(role);
    })
}
