const express = require('express');
const route = express.Router();

const journal = []

route.get('/add-journal', (req, res, next) => {
    res.render('add-journal', {pageTitle:'Add-Journal'})
})

route.post('/', (req, res, net) => {
    journal.push({})
    res.redirect('/')
})


module.exports = route;