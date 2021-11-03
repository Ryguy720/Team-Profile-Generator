const Intern = require("../lib/Intern");


 it("return values of Engineer Obj", () => {
     const test2 = new Intern("Roman")
     expect(test2.getName()).toequal("Roman")
 })

 it("return values of Employee Obj", () => {
    const test2 = new Intern("Roman", 120)
    expect(test2.getID()).toequal(120)
})

it("return values of Employee Obj", () => {
    const test2 = new Intern("Roman" , 120, "romanroy@gmail.com")
    expect(test2.getEmail()).toequal("romanroy@gmail.com")
})

it("return values of Employee Obj", () => {
    const test2 = new Intern("Roman" , 120, "romanroy@gmail.com", "Trilogy Bootcamp")
    expect(test2.getSchool()).toequal("Trilogy Bootcamp")
})