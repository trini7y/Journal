const express = require('express');
const route = express.Router();

const journal = []




route.get('/add-journal', (req, res, next) => {
    res.render('add-journal', {pageTitle:'Add-Journal'})
});

route.post('/add-journal', (req, res, next) => {
    if(req.push){
      function identity() {
        let counter = 0;
        counter++
        return counter;
      };
    }
    // let iden = identity();  
    journal.push({id: identity(), title: req.body.title, desc:req.body.description})
    console.log(journal)
    res.redirect('/')
});


exports.routes = route;
exports.journal = journal;