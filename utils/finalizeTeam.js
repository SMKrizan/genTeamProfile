const generateHTML = require('../src/roster-template.js');
const { writeFile, copyFile } = require('./generateRoster.js');

/**
 * Organizes the final HTML page with styles.
 * 
 * @param  {} teamData
 */
const finalizeTeam = async (teamData) => {
    const integrateData = generateHTML(teamData)
    await writeFile(integrateData).then(console.log("Your roster has been created."));
	await copyFile(integrateData).then(console.log("The stylesheet has been applied."));
}

module.exports = finalizeTeam;