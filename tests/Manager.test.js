const Manager = require("../lib/Manager");


 it("return values of Engineer Obj", () => {
     const test2 = new Manager("Shiv")
     expect(test2.getName()).toequal("Shiv")
 })

 it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv", 130)
    expect(test2.getID()).toequal(130)
})

it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv" , 130, "Shivroy@gmail.com")
    expect(test2.getEmail()).toequal("Shivroy@gmail.com")
})

it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv" , 130, "Shivroy@gmail.com", "Trilogy Bootcamp")
    expect(test2.getSchool()).toequal("Trilogy Bootcamp")
})