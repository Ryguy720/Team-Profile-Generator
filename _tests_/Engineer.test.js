const Engineer = require("../lib/Engineer");


 it("return values of Engineer Obj", () => {
     const test2 = new Engineer("Kendal")
     expect(test2.getName()).toBe("Kendal")
 })

 it("return values of Employee Obj", () => {
    const test2 = new Engineer("Kendal", 110)
    expect(test2.getID()).toBe(110)
})

it("return values of Employee Obj", () => {
    const test2 = new Engineer("Kendal" , 110, "kendalroy@gmail.com")
    expect(test2.getEmail()).toBe("kendalroy@gmail.com")
})

it("return values of Employee Obj", () => {
    const test2 = new Engineer("Kendal" , 110, "kendalroy@gmail.com", "https://github.com/Ryguy720")
    expect(test2.getgitHub()).toBe("https://github.com/Ryguy720")
})