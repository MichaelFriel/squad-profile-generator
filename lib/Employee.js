// TODO: Write code to define and export the Employee clas


class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        console.log("This is a NAME test")
    }

    getId() {
        console.log("This is an ID test")
    }

    getEmail() {
        console.log("This is an EMAIL test")
    }
    getRole(job) {
         console.log(job)
         console.log("This is a ROLE test")
         console.log(`My role is ${job}`)
        return job
      
    }
}

const employeeMark = new Employee("Marketa", 101, "email@emailtest.email" )


employeeMark.getRole("Employee")


module.exports = Employee