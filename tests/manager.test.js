const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("ManagerObject", () => {
    it("Should return an object", () => {
      const newManager = new Manager();
      expect(typeof newManager).toEqual("object");
    });
  });

  describe("name", () => {
    it("Should return the name of the employee", () => {
      const name = "John";
      const newManager = new Manager(name);
      expect(newManager.name).toEqual(name);
    });
  });

  describe("id", () => {
    it("Should return the id of the employee", () => {
      const name = "John";
      const id = 6;
      const newManager = new Manager(name, id);
      expect(newManager.id).toEqual(id);
    });
  });

  describe("email", () => {
    it("Should return the email of the employee", () => {
      const name = "John";
      const id = 6;
      const email = "chuck@chuck.com";
      const newManager = new Manager(name, id, email);
      expect(newManager.email).toEqual(email);
    });
  });

  describe("officeNumber", () => {
    it("Should return the office number of the manager", () => {
      const name = "John";
      const id = 6;
      const email = "chuck@chuck.com";
      const officeNumber = 5;
      const newManager = new Manager(name, id, email, officeNumber);
      expect(newManager.officeNumber).toEqual(officeNumber);
    });

  });


});
