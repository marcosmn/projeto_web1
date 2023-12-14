const express = require('express')
const userController = require('./userController');
const shareController = require('./shareController');

const app = express()

// USER api
app.get('/api/user', userController.getUsers);
app.get('/api/user/:id', userController.getUser);
app.post('/api/user', userController.createUser);
app.put('/api/user', userController.updateUser);
app.delete('/api/user', userController.deleteUser);

// SHARE api
app.get('/api/shares', shareController.getShares);
app.get('/api/share/:id', shareController.getShare);
app.post('/api/share', shareController.createShare);
app.put('/api/share', shareController.updateShare);
app.delete('/api/share', shareController.deleteShare);