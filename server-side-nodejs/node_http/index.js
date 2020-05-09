const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method == 'GET') {
        var fileURL;
        if (req.url == '/') {
            fileURL = '/index.html'
        } else {
            fileURL = req.url
        };
        var filePath = path.resolve('./public' + fileURL);
        const fileExtension = path.extname(filePath);
        if (fileExtension == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1> ERROR 404: ${fileURL} NOT FOUND</h1></body></html>`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1> ERROR 404: ${fileURL} NOT AN HTML FILE</h1></body></html>`);
            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1> ERROR 404: ${req.method} NOT SUPPORTED </h1></body></html>`);
        return;
    }
});
/* server.listen takes 3 parameters: 
    port #
    host name
    function that's executed when the server starts up */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
