const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dish_router');
const promoRouter = require('./routes/promotion_router');
const leaderRouter = require('./routes/leader_router');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));  // Use dev requirement; will print debug info
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// dishes endpoint
app.use('/dishes', dishRouter)

// promotions endpoint
app.use('/promotions', promoRouter)

// leaders endpoint
app.use('/leaders', leaderRouter)

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});