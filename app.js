var http = require('http');

var PORT = 14531;

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;
    console.log(rc);
    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = unescape(parts.join('='));
    });

    return list;
}


http.createServer(function (request, response) {

  var cookies = parseCookies(request);

  console.log(cookies);

  response.writeHead(200, {
    'Set-Cookie': 'mycookie=test',
    'Content-Type': 'text/plain'
  });
  response.end('Hello World\n');
}).listen(PORT);

console.log('Server running at http://127.0.0.1:' + PORT + '/');