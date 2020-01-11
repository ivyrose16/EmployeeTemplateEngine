const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
      return this.officeNumber;
  }
  getRole(){
      return "Manager";
  }
}



//const rectangle = new Rectangle(12, 9);

module.exports = Manager;
