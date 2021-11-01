const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub,) {
        this.name = name;
        this.id = id;
        this.email= email;
        this.gitHub= gitHub
      }
      getName(){
        return this.name;
    
      }
      getID(){
        return this.id
      }
      getEmail(){
        return this.email
      }
      getgitHub(){
          return this.gitHub
      }
      getRole(){
          return Engineer;
      }
    }
  module.exports = Engineer ;