const Employee = require("./employee.js")

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super (name, id, email)
        this.role = role
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole () {
        return "Manager"
}
}

const manager = new Manager(role, officeNumber)

module.exports= Manager