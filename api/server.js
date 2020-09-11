const express = require('express');
const helmet = require('hemlet');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev')); 

// Routers go here

server.use('/', (req, res) => {res.send('Server is up...')});
server.get('/', (req, res) => {
    res.send(`<h2>Sprint Day. Woooooo.</h2>`)
});


module.exports = server; 
