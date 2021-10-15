const Employee = require("../lib/employee.js")

describe("employee", () => {
    describe("employeeObject", () => {
        it("Should return an object", () => {
            const newEmployee = new Employee()
            expect(typeof(newEmployee)).toEqual("object")
        })
    })

describe("name", () => {
it ("Should return the name of the employee", () => {
    const name = "John"
    const newEmployee = new Employee (name)
    expect(newEmployee.name).toEqual(name)
})
})

describe("id", () => {
    it ("Should return the id of the employee", () => {
        const name = "John"
        const id = 6
        const newEmployee = new Employee (name, id)
        expect(newEmployee.id).toEqual(id)
    })
    })
       
    // name

    // id
    
    // email
    
    // getName()
    
    // getId()
    
    // getEmail()
    
    // getRole()—returns 'Employee'
})