const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let link = url.parse(req.url, true);
    let locateFile = '.' + link.pathname;
    fs.readFile(locateFile, (err, message) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 error! Can't locate the file, check your url!");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(message);
            return res.end();
        }
    });
}).listen(1234);