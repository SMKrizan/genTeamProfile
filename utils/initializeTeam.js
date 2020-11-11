const inquirer = require('inquirer');
const Manager = require('../lib/Manager');

/**
 * Prompts the user for information and uses that to create
 * a new Manager instance.
 */
const initializeTeam = async () => {
    console.log(`
    ============================================
    Answer these questions to set up a new team:
    ============================================
    `)

	const managerData = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "Team manager's name (required): ",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("\n Please enter the team manager's name");
					return false;
				}
			}
		},
		{
			type: 'number',
			name: 'id',
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
			name: 'email',
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
	]);
	return new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
};

module.exports = initializeTeam;