// access npm modules
const inquirer = require('inquirer');
// access file generation dependencies
const generateHTML = require('./src/roster-template.js');
const { writeFile } = require('../utils/generateRoster.js');
// access object modules
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamData = [];


function Team() {
    this.teamMembers = {};
}

// gather roster content through series of questions to user
const initializeTeam = () => {
    console.log(`
    ===================================================
    Answer these questions to set up a new team roster:
    ===================================================
    `)

    return 
}

class Engineer {
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

// the input-gathering function is called in order to prompt its output to the file-generating function
initializeTeam()
    // the output function 'teamData' is sent to the 'generateRoster' function
    .then(teamData => {
        // returns generateRoster(teamData) to file creation;
        const manager = new Manager(teamData.managername, teamData.managerId, teamData.manager.Email, teamData.office);
        team.push(manager)
    })
    // a file will then be genereated, 'teamRoster.html', within which the html template code will be actuated
    .then(htmlFile => {
        return writeFile(htmlFile);
    })
    .catch(err => {
        console.log(err);
    });


