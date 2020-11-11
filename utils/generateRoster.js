const fs = require('fs').promises;

/**
 * Writes the html to teamRoster.html
 * 
 * @param  {} fileContent
 */
const writeFile = async (fileContent) => {
	try {
		await fs.writeFile('dist/teamRoster.html', fileContent);
		return 200;
	}
	catch (err) {
		return err;
	}
};

/**
 * Copies styles into dist folder
 */
const copyFile = async () => {
	try {
		await fs.copyFile('src/style.css', 'dist/style.css');
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = { writeFile, copyFile };