const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./manager")
const Engineer = require("./engineer")
const Intern = require("./intern")

function promptEmployee() {
	return inquirer.prompt([{
			type: "input",
			name: "name",
			message: "Enter name of Employee?"
		},
		{
			type: "input",
			name: "ID",
			message: "Enter Employee ID number",
		},
		{
			type: "input",
			name: "Email",
			message: "Please enter your email",
		},
		{
			type: "list",
			name: "Type",
			message: "What type of employee would you like to add?",
			choices: ["Manager", "Engineer", "Intern"]

		},


	]).then(answers => {
		console.log(answers)
		if (answers.Type === "Manager") {
			promptManager(answers).then(input => {
				console.log(input);
			});
		}else if (answers.Type === "Engineer") {
            promptEngineer().then(input =>{
                console.log(input);
            })
        }else if (answers.Type === "Intern") {
            promptIntern().then(input => {
                console.log(input);
            })
        }
	});

}

function promptManager(employeeAnswers) {
	return inquirer.prompt([{
			type: "input",
			name: "officeNumber",
			message: "Enter Manager's office number?"
		},

		{
			type: "list",
			name: "Continue",
			message: "Would you like to add another employee?",
			choices: ["Y", "N"]

		}


	]).then(answers => {
        console.log(answers)
        let manager = new Manager(employeeAnswers.name, employeeAnswers.ID, employeeAnswers.Email, answers.officeNumber)
        console.log(manager)
		if (answers.Continue === "Y") {
			promptEmployee().then(input => {
				console.log(input);
			});
		}
	});

}

function promptEngineer(employeeAnswers) {
	return inquirer.prompt([{
			type: "input",
			name: "gitHub",
			message: "Enter Engineer's Github user name?"
		},

		{
			type: "list",
			name: "Continue",
			message: "Would you like to add another employee?",
			choices: ["Y", "N"]

		}


	]).then(answers => {
        console.log(answers)
        let engineer = new Engineer(employeeAnswers.name, employeeAnswers.ID, employeeAnswers.Email, answers.gitHub)
        console.log(engineer)
		if (answers.Continue === "Y") {
			promptEmployee().then(input => {
				console.log(input);
			});
		}
	});

}

function promptIntern() {
	return inquirer.prompt([{
			type: "input",
			name: "School",
			message: "Enter Intern's school"
		},

		{
			type: "list",
			name: "Continue",
			message: "Would you like to add another employee?",
			choices: ["Y", "N"]

		}


	]).then(answers => {
        console.log(answers)
        let intern = new Intern(employeeAnswers.name, employeeAnswers.ID, employeeAnswers.Email, answers.School)
        console.log(intern)
		if (answers.Continue === "Y") {
			promptEmployee().then(input => {
				console.log(input);
			});
		}
	});

}

promptEmployee().then(input => {
	console.log(input);
})