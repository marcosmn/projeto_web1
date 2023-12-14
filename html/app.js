const express = require('express')
const baseController = require('./baseController');

const app = express()

// GET
app.get('/api/user', baseController.getUsers);

// GET
app.get('/api/user/:id', baseController.getUser);

// POST
app.post('/api/user', baseController.createUser);

// PUT
app.put('/api/user', baseController.updateUser);

// Delete
app.delete('/api/user', baseController.deleteUser);