// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: Create an array of questions for user input
const promptEmployee = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
 
  
    ]).then(response => {
      var htmlpage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Profile</title>
      </head>
      <body>
          
      </body>
      </html>
`
console.log(htmlpage)
fs.writeFileSync("index.html",htmlpage,() =>{
  if(err)throw err
})
console.log("Readme generator")
    })
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();