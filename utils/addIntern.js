const Intern = require('../lib/Intern');
const inquirer = require('inquirer');

/**
 * Prompts the user for information and uses that to create
 * a new Intern instance.
 */
const addIntern = async () => {
    console.log(`
    ====================================================
    Answer the following to add an Intern to the team:
    ====================================================
    `);

	const internData = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
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
			name: 'id',
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
			name: 'email',
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
			type: 'input',
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
	]);
    return new Intern(internData.name, internData.id, internData.email, internData.school);
}

module.exports = addIntern;