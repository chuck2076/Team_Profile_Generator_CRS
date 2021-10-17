const generateHTML = require("./src/generateHTML")

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const teamArray = [];

const manQ = () => {
return inquirer.prompt ([
{
    type: "input",
    name: "name",
    message: "Name of Team Manager?"

},

{
    type: "input",
    name: "id",
    message: "What is the Manager ID?",
    validate: nameInput => {
    if (isNaN(nameInput)) {
        console.log ("Please enter a Number!")
        return false;
    }else {
        return true;
    }
  }
},

{
    type: "input",
    name: "email",
    message: "Enter the Manager Email:"
    },
{
    type: "input",
    name: "officeNumber",
    message: "What is the manager office number?",
    validate: input => {
        if (isNaN(input)) {
            console.log ("Please enter a Number!")
            return false;
        }else {
            return true;
        }
    }
}
])

.then(manInput => {
    const  { name, id, email, officeNumber } = manInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};

const empQ = () => {
 console.log('-- Add Employees to the Team --');

return inquirer.prompt ([
{
    type: "list",
    name: "role",
    message: "Select the type of Employee:",
    choices: ["Engineer", "Intern"]
},

{
    type: "input",
    name: "name",
    message: "Name of Employee?",

},

{
    type: "input",
    name: "id",
    message: "What is the Employee ID?",
    validate: input => {
    if (isNaN(input)) {
        console.log ("Please enter a Number!")
        return false;
    }else {
        return true;
    }
  }
},

{
    type: "input",
    name: "email",
    message: "Enter the Employee Email:"
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

{
    type: 'confirm',
    name: 'confirm',
    message: 'Would you like to add more team members?',
    default: false
}
])


.then(empInput => {
    const  { name, id, email, role, github, school, confirm } = empInput; 
    //const employee = new Employee (name, id, email, role, github, school);
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamArray.push(employee); 

    if (confirm) {
        return empQ(teamArray); 
    } else {
        return teamArray;
    }
})

};

// // // TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//      fs.writeFileSync(fileName, data)
//      .then((data) => {
//         let newEmployee = new Employee(data)
//         writeToFile ("output/team.html", newEmployee)
//  });
// }

manQ ()
.then(empQ)
// .then(teamArray => {
//     return generateHTML(teamArray)
// })
// .then()


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

// // // TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data)
// };

// // // // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((data) => {
//     let newEmployee = new Employee(data)
//     writeToFile ("output/team.html", newEmployee)
//     })
// };

// // Function call to initialize app
// init();


//Gather User input form Inquirer
//Create a README string
//Format through FS package