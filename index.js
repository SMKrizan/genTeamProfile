const inquirer = require('inquirer');
const initializeTeam = require('./utils/initializeTeam');
const addEngineer = require('./utils/addEngineer');
const addIntern = require('./utils/addIntern');
const finalizeTeam = require('./utils/finalizeTeam');

/**
 * Main App.
 */
const app = async () => {
	const teamData = { manager: [], intern: [], engineer: [] };
	teamData.manager.push(await initializeTeam());
	let adding = true;
	while (adding) {
		const selection = await inquirer.prompt([
				{
					type: 'list',
					name: 'addOrComplete',
					message: 'Would you like to add a team member or finalize this team?',
					choices: ['Engineer', 'Intern', 'Finalize team']
				}
		]);
		switch (selection.addOrComplete) {
			case 'Engineer':
				teamData.engineer.push(await addEngineer());
				break;
			case 'Intern':
				teamData.intern.push(await addIntern());
				break;
			default:
				await finalizeTeam(teamData);
				adding = false;
		}
	}
} 

app();