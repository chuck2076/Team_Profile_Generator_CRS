//Linking the Employee file
const Employee = require("./employee")
//Constructor to merge Employee data with Engineer data
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
//making Engineer available to other files
module.exports = Engineer