// access npm modules
const inquirer = require('inquirer');
// access file generation dependencies
const generateRoster = require('./src/roster-template.js');
// will include copyFile if stylesheet is used
const { writeFile, copyFile } = require('../utils/generateRoster.js');
// access core library modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// an empty array is created to hold data for a newly initialized team.
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
        teamData.push(manager)
        addOrFinalize()
    })
};

const addOrFinalize = () => {
    return inquirer
        .prompt([
            type: 'list',
            name: 'addOrComplete',
            message: 'Would you like to add a team member or finalize this team?',
            choices: ['Engineer', 'Intern', 'Finalize team roster'],
        ])
        .then(selection => {
            if (selection.addOrComplete = 'Engineer') {
                addEngineer();
                break;
            } else if (selection.addOrComplete = 'Intern') {
                addIntern();
                break;
            } else {
                finalizeRoster();
            }
        })
};

// captures data returned from 'initializeTeam' and calls itself recursively for as many team members required
const addEngineer = teamData => {
    console.log(`
    ====================================================
    Answer the following to add an Engineer to the team:
    ====================================================
    `);

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
                        console.log("Please enter engineer's name");
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
                        console.log("Please enter engineer's employee ID");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailEngineer',
                message: "Engineer's employee email (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Engineer's employee email");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'github',
                message: "Engineer's GitHub username (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Engineer's GitHub username");
                        return false;
                    }
                }
            }
        ])
        // new member data is pushed to the 'teamData' array and a final dataset is returned to 'initializeTeam' as 'teamData'
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
            teamData.push(engineer)
            addOrFinalize()
        })
}

const addIntern = teamData => {
    console.log(`
    ====================================================
    Answer the following to add an Intern to the team:
    ====================================================
    `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameIntern',
                message: "Intern's name: "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's name");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'idIntern',
                message: "Intern's employee ID (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's employee ID");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailIntern',
                message: "Intern's employee email (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Intern's employee email");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'school',
                message: "Intern's school (required): "
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's school");
                        return false;
                    }
                }
            }
        ])
        // new member data is pushed to the 'teamData' array and a final dataset is returned to 'initializeTeam' as 'teamData'
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school)
            teamData.push(intern)
            addOrFinalize()
        }
    }
}

// the input-gathering function is called in order to prompt its output to the file-generating function
finalizeRoster()
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


