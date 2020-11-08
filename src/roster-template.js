const display = () => {

  // function generates manager card
  const displayManager = (manager) => {
    return `
    <div class="col s12 m6 l6">  
      <div class="card">
        <div class="card-content">
          <span class="card-title">${manager.getName()}</span>
          <h6>${manager.getRole()}</h6>
          <h6>Employee ID: ${manager.getId()}</h6>
          <h6>Office: ${manager.getOffice()}</h6>
        </div>
        <div class="card-action">
          <a id="link" href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a>
        </div>
      </div>
    </div>
    `
  };

  // function generates an engineer card for each engineer as a string of html
  const displayEngineer = (engineer) => {
    const engrs = [];
    for (i=0; i < engineer.length; i++) {
      engrs[i] = `
      <div class="col s12 m6 l6">  
        <div class="card">
          <div class="card-content">
            <span class="card-title">${engineer[i].getName()}</span>
            <h6>${engineer[i].getRole()}</h6>
            <h6>Employee ID: ${engineer[i].getId()}</h6>
          </div>
          <div class="card-action">
            <a id="link" href="mailto:${engineer[i].getEmail()}">Email: ${engineer[i].getEmail()}</a>
            <a id="link" href="https://github.com/${engineer[i].getGithub()}">GitHub: ${engineer[i].getGithub()}</a>
          </div>
        </div>
      </div>
      `
    };
    engrs.push(engrs[i]);
    return engrs.join("")
  };  

  // function generates an intern card for each intern as a string of html
  const displayIntern = (intern) => {
    intrs = [];
    for (i=0; i < intern.length; i++) {
      intrs[i] = `
      <div class="col s12 m6 l6">  
        <div class="card">
          <div class="card-content">
            <span class="card-title">${intern[i].getName()}</span>
            <h6>${intern[i].getRole()}</h6>
            <h6>Employee ID: ${intern[i].getId()}</h6>
            <h6>${intern[i].getSchool()}</h6>
          </div>
          <div class="card-action">
            <a id="link" href="mailto:${intern[i].getEmail()}">Email: ${intern[i].getEmail()}</a>
          </div>
        </div>
      </div>
      `
      };
    intrs.push(intrs[i])
    return intrs.join("");
  };

  return {displayManager, displayEngineer, displayIntern}

};

// function generates string of HTML for roster
module.exports = (rosterData) => {

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
      <header>
        <div class="nav-wrapper green darken-3">
          <h3 id="title" class="brand-logo center white-text">Team Roster</h3>
        </div>
      </header>

      <main>
        <div class="row">
          ${displayTeam.displayManager(rosterData.manager[0])}
          ${displayTeam.displayEngineer(rosterData.engineer)}
          ${displayTeam.displayIntern(rosterData.intern)}
        </div>
      </main>

      <footer id="ftr" class="page-footer">
          <div class="container">
            © 2020 Sara Krizan
            <a class="right" href="https://github.com/SMKrizan">GitHub.com/SMKrizan</a>
          </div>
      </footer>
    </body>
  `
}