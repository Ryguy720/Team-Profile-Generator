// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Contributors to the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'test instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage information?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'choose a license?',
        choices: ["MIT","ISC","APACHE2.0","GPL"]
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email?',
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
console.log(readmetxt)
fs.writeFileSync("README.md",readmetxt,(err,data)=>{
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