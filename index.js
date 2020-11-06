// access npm modules
const inquirer = require('inquirer');

// file generation
const generateRoster = require('./src/roster-template.js');
const { writeFile, copyFile } = require('./utils/generateRoster.js');

// access core library modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// an empty array is created to hold data for a newly initialized team.
const teamData = [];

// user content required for new team initialization
const initializeTeam = () => {
    console.log(`
    ============================================
    Answer these questions to set up a new team:
    ============================================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameManager',
            message: "Team manager's name (required): ",
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
            message: "Team manager's employee ID (required): ",
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
            message: "Team manager's employee email (required): ",
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
            message: "Team manager's office number (required): ",
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
            {
                type: 'list',
                name: 'addOrComplete',
                message: 'Would you like to add a team member or finalize this team?',
                choices: ['Engineer', 'Intern', 'Finalize team roster'],
            }
        ])
        .then(selection => {
            if (selection.addOrComplete = 'Engineer') {
                addEngineer();
            } else if (selection.addOrComplete = 'Intern') {
                addIntern();
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
                message: "Engineer's name: ",
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
                message: "Engineer's employee ID (required): ",
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
                message: "Engineer's employee email (required): ",
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
                message: "Engineer's GitHub username (required): ",
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
                message: "Intern's name: ",
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
                message: "Intern's employee ID (required): ",
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
                message: "Intern's employee email (required): ",
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
                message: "Intern's school (required): ",
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
        })
}

// this function establishes the flow of ansynchronous information
function finalizeTeam() {
    inquirer.prompt(initializeTeam)
    // the final output array 'teamData' is passed to the 'generateRoster' function
    .then(teamData => {
        // returns generateRoster using 'teamData' inputs for file creation;
        return generateRoster(teamData);
    })
    // a file will then be genereated, 'teamRoster.html', within which the html template code will be applied
    .then(htmlFile => {
        return writeFile(htmlFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}