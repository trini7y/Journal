const express = require('express');
const route = express.Router();

const journal = []

route.get('/add-journal', (req, res, next) => {
    res.render('add-journal', {pageTitle:'Add-Journal'})
});

route.post('/add-journal', (req, res, net) => {
    journal.push({title: req.body.title, desc:req.body.description})
    console.log(journal)
    res.redirect('/')
});


exports.routes = route;
exports.journal = journal;