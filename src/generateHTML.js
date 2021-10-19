//const index = require("index.js")

//This file generates the HTML to be used in team.html
const managerCard = (data) => {
const Manager = data[0] 
return` <div class="card border-danger mb-3" style="max-width: 18rem;">
<div class="card-header">
<h3>${Manager.name}</h3>
<h4>Manager</h4><i class="fas fa-solid fa-mug-hot fa-lg"></i>
</div>
<div class="card-body text-danger">
<p class="id">ID: ${Manager.id}</p>
<p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
<p class="office">Office Number: ${Manager.officeNumber}</p>
</div>
</div>`  
}


const employeeCard = (data) => {
  let cards = ``
data.forEach(element => {
  console.log(element)
 if (element.getRole() === "Engineer") {
 cards = cards + `<div class="card border-danger mb-3" style="max-width: 18rem;">
 <div class="card-header">
 <h3>${element.name}</h3>
 <h4>Engineer</h4><i class="fas fa-laptop-code"></i>
 </div>
 <div class="card-body text-danger">
 <p class="id">ID: ${element.id}</p>
 <p class="email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
 <p class="office">GitHub: ${element.github}</p>
</div>
</div>`
 } else if (element.getRole() === "Intern")  {
cards = cards + `<div class="card border-danger mb-3" style="max-width: 18rem;">
<div class="card-header">
  <h3>${element.name}</h3>
  <h4>Intern</h4><i class="fas fa-graduation-cap"></i>
</div>
<div class="card-body text-danger">
  <p class="id">ID: ${element.id}</p>
  <p class="email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
  <p class="office">School: ${element.school}</p>
</div>
</div>`
 } else {
   console.log("Oops, something went wrong!")
  };
})
return cards
}

const generateHTML = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous" />
      <script src="https://kit.fontawesome.com/cbebc77487.js" crossorigin="anonymous"></script>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" 
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" 
      crossorigin="anonymous"
      />
  
      <link rel="stylesheet" href="style.css" />
  
  <title>Team Profile Generator</title>
      </head>
     
  <body>
   <header class = "jumbotron"><h1>Team Profile Generator</h1></header>
        
  <main class="row flex-row justify-content-center" id="teamCards">
    <div class="card-deck">
    ${managerCard(data)}
    ${employeeCard(data)}
    
    </div>
  </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
        <script src="Develop/script.js"></script>
  </body>
  </html>

`

};

module.exports= generateHTML