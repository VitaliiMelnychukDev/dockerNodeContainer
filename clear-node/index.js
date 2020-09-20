const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const response = {
        "message": "Hello"
    };
    res.write(JSON.stringify(response));
    res.end();
});

server.listen(8080);
