const http = require("http");
const fs = require('fs');

var str = "";

fs.readFile('index.html', (errore, data) => {
  if ( errore ) {
    throw errore;
  }
  str = data;
});
let server = http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write(str);
    response.end();
});
server.listen(8000);