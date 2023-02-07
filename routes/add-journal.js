const express = require('express');
const route = express.Router();


route.get('/add-journal', (req, res, next) => {
    res.render('add-journal', {pageTitle:'Add-Journal'})
})

route.post('/', (req, res, net) => {
    res.redirect('/')
})


module.exports = route;