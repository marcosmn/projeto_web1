const express = require('express')
const baseController = require('./baseController');

const router = express.Router();

// GET
router.get('/user', (req, res) => {
    baseController.getUsers()
    res.send('GET request to the homepage')
})

// GET
router.get('/user/:id', (req, res) => {
    baseController.getUsers()
    res.send('GET request to the homepage')
})
  
// POST
router.post('/user', (req, res) => {
    res.send('POST request to the homepage')
})