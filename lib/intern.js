const Employee = require("./employee.js")

class Intern extends Employee {
    constructor (name, id, email, role, school) {
        super (name, id, email)
        this.role = role
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole () {
        return "Intern";
    }
}

const intern = new Intern(role, school)

module.exports= Intern