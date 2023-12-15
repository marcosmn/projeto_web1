const express = require('express')
const userController = require('./src/js/userController');
const shareController = require('./src/js/shareController');

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

app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});