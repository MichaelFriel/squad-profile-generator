const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        console.log("This is the school log")
        return this.school
    }
    
    getRole() {
        return "Intern"
    }
}

module.exports = Intern