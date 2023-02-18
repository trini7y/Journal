const express = require('express');
const route = express.Router();

const journal = []

route.get('/add-journal', (req, res, next) => {
    res.render('add-journal', {pageTitle:'Add-Journal'})
});



route.post('/add-journal', (req, res, next) => {
    function identity() {
      i = 0;
      return i+=1;
    }
    console.log( identity() );

    journal.push({id: identity(), title: req.body.title, desc:req.body.description})
    console.log(journal)
    res.redirect('/')
});


exports.routes = route;
exports.journal = journal;