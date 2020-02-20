const Employee = require("../app");
const fs = require ("fs")

// const e = new Employee('devin', 1, 'devin@gmail', 'developer')
// e.getRole()'

class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    
    getRole(){
        return this.title;
    }

}




module.exports = Employee;