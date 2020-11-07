// function generates manager card

console.log(teamData)

const displayCards = teamData => {
  const displayManager = manager => {
      return `
      <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${manager.getName()}</span>
            <h5>${manager.getRole()}</h5>
            <h6>ID: ${manager.getID()}</h6>
            <h6>ID: ${manager.getOffice()}</h6>
          </div>
          <div class="card-action">
            <a href="mailto:${manager.getEmail}">Email: ${manager.getEmail}</a>
          </div>
        </div>
      </div>
    </div>`
  }
  
}


// function generates engineer card
const displayEngineer = engineer => {
    return `
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
        <span class="card-title">${engineer.getName()}</span>
        <h5>${engineer.getRole()}</h5>
        <h6>ID: ${engineer.getID()}</h6>
      </div>
      <div class="card-action">
        <a href="mailto:${engineer.getEmail}">Email: ${engineer.getEmail}</a>
        <a href="https://github.com/${engineer.getGithub}">GitHub Username: ${engineer.getGithub}</a>
      </div>
      </div>
    </div>
  </div>`
}

// function generates intern card
const displayIntern = intern => {
    return `
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
        <span class="card-title">${intern.getName()}</span>
        <h5>${intern.getRole()}</h5>
        <h6>ID: ${intern.getID()}</h6>
        <h6>${intern.getSchool()}</h6>
      </div>
      <div class="card-action">
        <a href="mailto:${intern.getEmail}">Email: ${intern.getEmail}</a>
      </div>
      </div>
    </div>
  </div>`
}

// function generates string of HTML for roster
module.exports = rosterData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;1,300;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css"
    </head>

    <body>
    <ul class="collection with-header">
    <li class="collection-header"><h4>Team Roster</h4></li>
    <li class="collection-item"></li>
    <li class="collection-item">Alvin</li>
    <li class="collection-item">Alvin</li>
    <li class="collection-item">Alvin</li>
  </ul>
`
}