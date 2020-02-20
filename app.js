const inquirer = require("inquirer");
const fs = require ("fs")

// const Employee = require("./lib/Employee");
// const employee = new Employee();
function employeeInfo(){
    return inquirer.prompt([
        {
            type: "input",
            message:"What is your Employees name?",
            name:"employeeName"
         },
         {
            type: "input",
            message:"What is your Employees ID number?",
            name:"employeeID"
         },
         {
            type: "input",
            message:"What is your Employees email address?",
            name:"employeeEmail"
         },
         {
            type: "list",
            message:"What is your Employees role?",
            name:"employeeName",
            choices: ["Manager", "Intern","Engineer"]
         },
    ]);
}


async function init() {
    try{

        const answers = await employeeInfo();

    }
    catch(err){
        console.log(err)
        inquirer.prompt(answers)
    }
}


init();
