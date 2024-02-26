// TODO: Write code to define and export the Employee clas


class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
       return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
    getRole() {
         
      return "Employee"
    }
}

const employeeMark = new Employee("Marketa", 101, "email@emailtest.email" )


const markRole = employeeMark.getRole()
console.log(markRole)

module.exports = Employee