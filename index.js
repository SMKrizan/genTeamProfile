// access npm modules
const inquirer = require('inquirer');
// access file generation dependencies
const generateRoster = require('./src/roster-template.js');
// will include copyFile if stylesheet is used
const { writeFile, copyFile } = require('../utils/generateRoster.js');
// access core library modules
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamData = [];

// user content required for new team initialization
function initializeTeam() {
    console.log(`
    ============================================
    Answer these questions to set up a new team:
    ============================================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameManager',
            message: "Team manager's name (required): "
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'idManager',
            message: "Team manager's employee ID (required): "
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailManager',
            message: "Team manager's employee email (required): "
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee email");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'office',
            message: "Team manager's office number (required): "
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number");
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office)
        memberData.push(manager)
        addOrFinalize()
    })
};

const addOrFinalize = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'addOrComplete',
            message: 'Would you like to add an engineer or intern to this team?',
            choices: ['Engineer', 'Intern', 'Finish building team roster'],

        },
    ])
}

// captures data returned from 'initializeTeam' and calls itself recursively for as many team members required
const addEngineer = teamData => {
    console.log(`
    ========================================================
    Enter the following data to add an Engineer to the team:
    ========================================================
    `);
    // an empty array is created to hold data from a newly initialized team. Otherwise, data will be added to the existing team data array.
    if (!teamData.members) {
        teamData.members = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameEngineer',
                message: "Engineer's name: "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team engineer's name");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'idEngineer',
                message: "Engineer's employee ID (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's employee ID");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailManager',
                message: "Team manager's employee email (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's employee email");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'office',
                message: "Team manager's office number (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's office number");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'addOrComplete',
                message: 'Would you like to add an engineer or intern to this team?',
                choices: ['Engineer', 'Intern', 'Finish building team roster'],
            },
    
            }
        ])
    // new member data is pushed to the 'memberData' array and a final dataset is returned to 'initializeTeam' as 'teamData'

}

class Manager {

    inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: "Enter the team member's name: "
    })
    .then(({ name }) => {
    this.employee = new Employee(name);
})
}

initializeTeam.prototype.id = function () {
    inquirer
        .prompt({
            type: 'number',
            name: 'id',
            message: "Enter the team member's employee id:  "
        })
        .then(({ id }) => {
            this.employee.id = new Employee.id(id);
        })
}

initializeTeam.prototype.email = function () {
    inquirer
        .prompt({
            type: 'input',
            name: 'email',
            message: "Enter the team member's work email: "
        })
        .then(({ email }) => {
            this.employee.email = new Employee.email(email);
        })
}

initializeTeam.prototype.role = function () {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: "Enter the team member's role: ",
            choices: ['employee', 'engineer', 'manager', 'intern']
        })
        .then(({ role }) => {
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


