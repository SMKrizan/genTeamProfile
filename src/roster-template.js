// const printData = teamData => {
//   console.log('teamData:', teamData)
// }


const display = () => {

  // function generates manager card
  const displayManager = (manager) => {
    console.log('manager:', manager)
    return `
    <li class="collection-item">
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${manager.getName()}</span>
              <h5>${manager.getRole()}</h5>
              <h6>ID: ${manager.getId()}</h6>
              <h6>ID: ${manager.getOffice()}</h6>
            </div>
            <div class="card-action">
              <a href="mailto:${manager.getEmail}">Email: ${manager.getEmail}</a>
            </div>
          </div>
        </div>
      </div>
    </li>`
  };

  // function generates engineer card
  const displayEngineer = (engineerData) => {
    console.log('engineer: ', engineerData);
    engineerData.forEach(engineer => {
      return `
      <li class="collection-item">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${engineer.getName()}</span>
                <h5>${engineer.getRole()}</h5>
                <h6>ID: ${engineer.getId()}</h6>
              </div>
              <div class="card-action">
                <a href="mailto:${engineer.getEmail}">Email: ${engineer.getEmail()}</a>
                <a href="https://github.com/${engineer.getGithub()}">GitHub Username: ${engineer.getGithub()}</a>
              </div>
            </div>
          </div>
        </div>
      </li>`
    })
  };

  // function generates intern card
  const displayIntern = (internData) => {
    console.log('intern: ', internData)
    internData.forEach((intern) => {
      return `
      <li class="collection-item">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${intern.getName()}</span>
                <h5>${intern.getRole()}</h5>
                <h6>ID: ${intern.getId()}</h6>
                <h6>${intern.getSchool()}</h6>
              </div>
              <div class="card-action">
                <a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a>
              </div>
            </div>
          </div>
        </div>
      </li>`
    })
  };
  return {displayManager, displayEngineer, displayIntern}
};

// function generates string of HTML for roster
module.exports = (rosterData) => {
  console.log('rosterData:', rosterData);

  const displayTeam = display();

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
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">Team Roster</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="#">Manager</a></li>
            <li><a href="#">Engineers</a></li>
            <li><a href="#">Interns</a></li>
          </ul>
        </div>
      </nav>
      ${displayTeam.displayManager(rosterData.manager[0])}
      ${displayTeam.displayEngineer(rosterData.engineer)}
      ${displayTeam.displayIntern(rosterData.intern)}
    </body>
`
}