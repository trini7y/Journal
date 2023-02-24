const express = require('express');
const route = express.Router();
const add_journal = require('./add-journal');


route.get('/', (req, res, next) => {
    const journal = add_journal.journal;
    res.render('index', {pageTitle: 'Home', journ: journal, path:'/home'})
})

module.exports = route;