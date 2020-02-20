const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, title, officeNumber){
        super(name, id, email, title, officeNumber);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    };
}

module.exports = Manager;