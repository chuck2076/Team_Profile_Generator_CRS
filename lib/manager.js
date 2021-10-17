//Linking the Employee file
const Employee = require("./employee")
//Constructor to merge Employee data with Manager data
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber
    }

    getRole () {
        return "Manager"
}
}

//const addManager = new Manager(role, officeNumber)
//making Manager available to other files
module.exports= Manager