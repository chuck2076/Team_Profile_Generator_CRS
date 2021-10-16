const Engineer = require("./engineer")
const Manager = require("./manager")
const Intern = require("./intern")

//Creating Contructor class for all Employees
class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }

    // returning name from input
    getName () {
        return this.name;
    }

    // returning ID from input
    getId () {
        return this.id;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};
const employees = new Employee(name, id, email, role)


module.exports = Employee