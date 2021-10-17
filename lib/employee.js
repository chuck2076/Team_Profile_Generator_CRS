
//Creating Contructor class for all Employees
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
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
//const newEmployee = new Employee(name, id, email, role)

//Making Employye available to other files
module.exports = Employee