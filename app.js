const inquirer = require("inquirer");
// const fs = require ("fs") //save for later, maybe

// const Employee = require("./lib/Employee");


//Initial questions at startup
function employeeInfo(){
    return inquirer.prompt([
        {
            type: "input",
            message:"What is your Employees name?",
            name: "name"
         },
         {
            type: "input",
            message:"What is your Employees ID number?",
            name:"id"
         },
         {
            type: "input",
            message:"What is your Employees email address?",
            name:"email"
         },
         {
            type: "list",
            message:"What is your Employees role?",
            name:"title",
            choices: 
            ["Manager", 
            "Intern",
            "Engineer"]
         },
    ]);
};



//Starts the app
async function init() {
    try{
        const answers = await employeeInfo();
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
    }
    catch(err){
        console.log(err)
        inquirer.prompt(answers)
    }
}


init();
