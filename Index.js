// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { title } = require('process');
var Engineerarry = ""
// TODO: Create an array of questions for user input
const promptEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'title',
      message: 'What is your project title?',
      choices: ['Engineer', 'Intern', 'Manager', 'Exit App']
    }


  ]).then(response => {

    switch (response.title) {

      case "Engineer":
        addEngineer()
        break;
      case "Intern":
        addIntern()
        break
      case "Manager":
        addManager()
        break
      case "Exit App":
        writeToFile()
        break
    }


  })
}
function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Enginerr name?',

    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter Enginerr id?',

    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Enginerr email?',

    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Enter Enginerr GitHub?',

    }

  ]).then(({ name, id, email, github }) => {
    var Employee = new Engineer(name, id, email, github)
    Engineerarry += `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Employee Name:${Employee.name}</h5>
       <h5 class="card-title">Designation:${Employee.getRole()}</h5>
       <p class="card-text">Employee ID: ${Employee.id}</p>
       <a href="https://github.com/${Employee.gitHub}" class="btn btn-primary">github</a>
       <a href="mailto:${Employee.email}" class="btn btn-primary">Email</a>
     </div>
   </div>`
    console.log(Engineerarry);
    promptEmployee()
  })

}

// TODO: Create a function to write README file
function writeToFile() {
  var htmlpage1 = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>`
  var htmlpage2 = `
 

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
`
  var HTMLCode = htmlpage1 + Engineerarry + Managerarray + Internarray + htmlpage2
    fs.writeFileSync("index.html", HTMLCode, (err, res) => {
      if (err) throw err;
      process.exit(0)
    })
  console.log("Readme generator")

}



promptEmployee();



