//Linking the Employee file
const Employee = require("./employee")
//Constructor to merge Employee data with Intern data
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole () {
        return "Intern";
    }
}

//const newIntern = new Intern(role, school)
//making Intern available to other files
module.exports= Intern