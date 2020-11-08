const display = () => {

  // function generates manager card
  const displayManager = (manager) => {
    return `
    <li class="collection-item">
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${manager.getName()}</span>
              <h5>${manager.getRole()}</h5>
              <h6>Employee ID: ${manager.getId()}</h6>
              <h6>Office: ${manager.getOffice()}</h6>
            </div>
            <div class="card-action">
              <a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a>
            </div>
          </div>
        </div>
      </div>
    </li>`
  };

  // function generates engineer card
  const displayEngineer = (engineer) => {
      for (i=0; i < engineer.length; i++) {
      return `
      <li class="collection-item">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${engineer[i].getName()}</span>
                <h5>${engineer[i].getRole()}</h5>
                <h6>Employee ID: ${engineer[i].getId()}</h6>
              </div>
              <div class="card-action">
                <a href="mailto:${engineer[i].getEmail()}">Email: ${engineer[i].getEmail()}</a>
                <a href="https://github.com/${engineer[i].getGithub()}">GitHub Username: ${engineer[i].getGithub()}</a>
              </div>
            </div>
          </div>
        </div>
      </li>`
    }
  };  

  // function generates intern card
  const displayIntern = (intern) => {
      for (i=0; i < intern.length; i++) {
        return `
        <li class="collection-item">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${intern[i].getName()}</span>
                  <h5>${intern[i].getRole()}</h5>
                  <h6>Employee ID: ${intern[i].getId()}</h6>
                  <h6>${intern[i].getSchool()}</h6>
                </div>
                <div class="card-action">
                  <a href="mailto:${intern[i].getEmail()}">Email: ${intern[i].getEmail()}</a>
                </div>
              </div>
            </div>
          </div>
        </li>`
      }
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
        <link rel="stylesheet" href="style.css">
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