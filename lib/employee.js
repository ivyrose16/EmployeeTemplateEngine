class Employee {
    constructor(name, id, title) {
      this.name = name;
      this.id = id;
      this.title = title;
    }
    
    getName(){
      return this.name;
    }
    getID(){
      return this.id;
    }
    getEmail(){
      return this.email
    }
    getRole(){
      return "Employee";
    }
  }

  /*function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "ID",
        message: "What is your ID",
      },
      {
        type: "input",
        name: "Email",
        message: "Please enter your email",
      },
  
    ]);
  
    }
    */
  module.exports = Employee;