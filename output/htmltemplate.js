function generateHTML(data) {
    return `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
        <title>Employee Roster</title>
      </head>
      <body>
        <h1>Employee Roster</h1>
    
        <div class = container>
        <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h2>Manager</h2></li>
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">Office: ${data.officeNumber}</li>
                </ul>
                
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h2>Engineer</h2></li>
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">GitHub: ${data.github}</li>
                </ul>
                
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h2>Intern</h2></li>
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">School: ${data.school}</li>
                </ul>
                
              </div>
            </div>
          </div>
          </div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
    </html>`
}

module.exports = generateHTML;