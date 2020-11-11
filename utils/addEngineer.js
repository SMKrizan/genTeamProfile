const Engineer = require('../lib/Engineer');
const inquirer = require('inquirer');

/**
 * Prompts the user for information and uses that to create
 * a new Engineer instance.
 */
const addEngineer = async () => {
    console.log(`
    ====================================================
    Answer the following to add an Engineer to the team:
    ====================================================
    `);

	const engineerData = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "Engineer's name: ",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter engineer's name.");
					return false;
				}
			}
		},
		{
			type: 'number',
			name: 'id',
			message: "Engineer's employee ID (required): ",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter engineer's employee ID.");
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'email',
			message: "Engineer's employee email (required): ",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter Engineer's employee email.");
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'github',
			message: "Engineer's GitHub username (required): ",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter Engineer's GitHub username.");
					return false;
				}
			}
		}
	]);
	return new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
}

module.exports = addEngineer;