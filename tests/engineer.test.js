const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("EngineerObject", () => {
        it("Should return an object", () => {
            const newEngineer = new Engineer()
            expect(typeof(newEngineer)).toEqual("object")
        })
    })

    describe("name", () => {
        it ("Should return the name of the employee", () => {
            const name = "John"
            const newEngineer = new Engineer (name)
            expect(newEngineer.name).toEqual(name)
        })
        })

    describe("id", () => {
        it ("Should return the id of the employee", () => {
            const name = "John"
            const id = 6
            const newEngineer = new Engineer (name, id)
            expect(newEngineer.id).toEqual(id)
        })
        })
    
    describe("email", () => {
        it ("Should return the email of the employee", () => {
            const name = "John"
            const id = 6
            const email = "chuck@chuck.com"
            const newEngineer = new Engineer (name, id, email)
            expect(newEngineer.email).toEqual(email)
        })
        })

        describe("github", () => {
            it ("Should return the github of the employee", () => {
                const name = "John"
                const id = 6
                const email = "chuck@chuck.com"
                const github = "github"
                const newEngineer = new Engineer (name, id, email, github)
                expect(newEngineer.github).toEqual(github)
            })
            })


           
        // name
    
        // id
        
        // email
        
        // getName()
        
        // getId()
        
        // getEmail()
        
        // getRole()—returns 'Employee'

});