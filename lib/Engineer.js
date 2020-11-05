const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = 0o00000, email = '', github = '') {

        super(name, id, email);

        this.github = github;
    }

    getGithub() {

    }
}

module.exports = Engineer;