const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));  // Use dev requirement; will print debug info
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// HTTP Methods for /dishes endpoint
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes')
});
app.post('/dishes', (req, res, next) => {
    res.end(`Will add the dish: ${req.body.name} with details: ${req.body.description}`);
});
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on dishes');
});
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes');
});


app.get('/dishes/:dishId', (req, res, next) => {
    res.end(`Will send the dish: ${req.params.dishId}`)
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on dishes/${req.params.dishId}`);
});
app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`Updating the dish: ${req.params.dishId} \n`)
    res.end(`Will update dish: ${req.params.dishId} with details: ${req.body.description}`);
});
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`Deleting dish: ${req.params.dishId}`);
});

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});