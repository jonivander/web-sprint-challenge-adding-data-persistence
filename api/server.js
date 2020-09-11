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
server.post('/resources', (req, res) => {
    db('resources').insert(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error adding this resource'
            });
        });
});

// GET - Fetch list of resources
server.get('/resources', (req, res) => {
    db('resources')
        .then(resources => {
            if (resources) {
                res.status(200).json(resources)
            } else {
                res.status(404).json({ message: 'resources not Found' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the resources',
            });
        })
});


// POST - Add projects
server.post('/projects', (req, res) => {
    db('projects').insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error adding this project'
            });
        });
});

// GET - Fetch list of projects
server.get('/projects', (req, res) => {
    db('projects')
        .then(projects => {
            if (projects) {
                res.status(200).json(projects)
            } else {
                res.status(404).json({ message: 'projects not Found' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the projects',
            });
        })
});


// POST - Add tasks
server.post('/tasks', (req, res) => {
    db('tasks').insert(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error adding this task'
            });
        });
});

// GET - Fetch list of tasks
server.get('/tasks', (req, res) => {
    db('tasks')
        .then(tasks => {
            if (tasks) {
                res.status(200).json(tasks)
            } else {
                res.status(404).json({ message: 'tasks not Found' })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the tasks',
            });
        })
});


module.exports = server; 
