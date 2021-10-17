const Intern = require("../lib/intern.js")

describe("Intern", () => {
    describe("InternObject", () => {
        it("Should return an object", () => {
          const newIntern = new Intern();
          expect(typeof newIntern).toEqual("object");
        });
      });
    
      describe("name", () => {
        it("Should return the name of the employee", () => {
          const name = "John";
          const newIntern = new Intern(name);
          expect(newIntern.name).toEqual(name);
        });
      });
    
      describe("id", () => {
        it("Should return the id of the employee", () => {
          const name = "John";
          const id = 6;
          const newIntern = new Intern(name, id);
          expect(newIntern.id).toEqual(id);
        });
      });
    
      describe("email", () => {
        it("Should return the email of the employee", () => {
          const name = "John";
          const id = 6;
          const email = "chuck@chuck.com";
          const newIntern = new Intern(name, id, email);
          expect(newIntern.email).toEqual(email);
        });
      });
    
      describe("school", () => {
        it("Should return the school of the intern", () => {
          const name = "John";
          const id = 6;
          const email = "chuck@chuck.com";
          const school = "yadda yadda yadda";
          const newIntern = new Intern(name, id, email, school);
          expect(newIntern.school).toEqual(school);
        });

      });
    
    
    });