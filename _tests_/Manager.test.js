const Manager = require("../lib/Manager");


 it("return values of Engineer Obj", () => {
     const test2 = new Manager("Shiv")
     expect(test2.getName()).toBe("Shiv")
 })

 it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv", 130)
    expect(test2.getID()).toBe(130)
})

it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv" , 130, "Shivroy@gmail.com")
    expect(test2.getEmail()).toBe("Shivroy@gmail.com")
})

it("return values of Employee Obj", () => {
    const test2 = new Manager("Shiv" , 130, "Shivroy@gmail.com", "ON121")
    expect(test2.getofficeNumber()).toBe('ON121')
})