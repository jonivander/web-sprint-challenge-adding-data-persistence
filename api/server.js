const express = require('express');
const helmet = require('hemlet');
const morgan = require('morgan');

const db = require('./data/knex-config');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev')); 

server.use('/', (req, res) => {res.send('Server is up...')});
server.get('/', (req, res) => {
    res.send(`<h2>Sprint Day. Woooooo.</h2>`)
});

// POST  - Add resources

// GET - Fetch list of resources


// POST - Add projects

// GET - Fetch list of projects


// POST - Add tasks

// GET - Fetch list of tasts


module.exports = server; 
