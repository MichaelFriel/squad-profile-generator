// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    testManager() {
        console.log(`My name is ${this.name}\n I have an Id of ${this.id}\n My email address is ${this.email}\n You can contact me at ${this.officeNumber}`)
    }

    getRole() {
        return "Manager"
    }
}

const managerLauren = new Manager("Lauren", 104, "Lauren@lauren.com", "+4444444")

managerLauren.testManager()