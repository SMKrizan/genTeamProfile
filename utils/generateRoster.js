const fs = require('fs');

// output for this function is creation of a new HTML file, 'teamRoster.html'
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/teamRoster.html', fileContent, err => {
            // if there is an error, related message will be sent to Promise's 'catch()' method
            if (err) {
                reject(err);
                // return out of present function to ensure the Promise is not inadvertantly passed to the 'resolve()' function
                return;
            }
            // OR otherwise, Promise is sent to 'resolve()' and data returned to '.then()' method
            resolve({
                ok: true,
                message: 'Roster created. Navigate to dist/teamRoster.html for review.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('src/style.css', 'dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet applied.'
            });
        });
    });
};

// resolved data for both functions are exported 
module.exports = { writeFile, copyFile };