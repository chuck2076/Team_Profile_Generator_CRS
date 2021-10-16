const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const questions = [{
    type: "list",
    name: "role",
    message: "What is the role of the employee?",
    choices: ["Manager", "Engineer", "Intern"]
    },
{
        type: "input",
        name: "name",
        message: "Name of employee:"
    },
{
    type: "input",
    name: "id",
    message: "What is the employee ID:",

},

{
    type: "input",
    name: "email",
    message: "Enter the employee Email:"
    },
{
    type: "input",
    name: "officeNumber",
    message: "What is the manager office number?",
    when(choices) {
        return choices.role === "Manager"
    }
},

{
    type: "input",
    name: "github",
    message: "Link GitHub repo of engineer:",
    when(choices) {
        return choices.role === "Engineer"
    }

    },
{
        type: "input",
        name: "school",
        message: "Name of intern school:",
        when(choices) {
            return choices.role === "Intern"
        }

    },

];

// inquirer
//   .prompt(questions)
//   .then((data) => {
//     console.log(JSON.stringify(data))
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Your console environment is not supported!")
//     } else {
//       console.log(error)
//     }
// })

// // TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

// // // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    let readMeString = new Employee(data)
    writeToFile ("output/team.html", readMeString)
    })
};

// Function call to initialize app
init();


//Gather User input form Inquirer
//Create a README string
//Format through FS package