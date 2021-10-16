const Employee = require("./employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole () {
        return "Engineer";
    }
}

//const newEngineer = new Engineer(role, github)

module.exports = Engineer