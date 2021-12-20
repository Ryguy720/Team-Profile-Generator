const Employee = require("../lib/Employee");


 it("return values of Employee Obj", () => {
     const test1 = new Employee("Logan")
     expect(test1.getName( )).toBe("Logan")
 })

 it("return values of Employee Obj", () => {
    const test1 = new Employee("Logan", 100)
    expect(test1.getID( )).toBe(100)
})

it("return values of Employee Obj", () => {
    const test1 = new Employee("Logan" , 100, "loganroy@gmail.com")
    expect(test1.getEmail( )).toBe("loganroy@gmail.com")
})