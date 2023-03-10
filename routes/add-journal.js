const express = require('express');
const route = express.Router();

const journal = []

//Add the date created
function getDayYear(){
  let date = new Date();
  let conv = date.toUTCString()
  return (conv.slice(5, 16));
}

function getTime(){
  let date = new Date();
  let conv = date.toUTCString();
  return (conv.slice(17, 22));
}

console.log(getDayYear(), getTime());


//Increment ID
class ID {
  static currentId = 1  ;
  static idIncrement = 1;

  constructor() {
    this.id = ID.currentId;
    ID.currentId += ID.idIncrement;
  }
}


route.get('/add-journal', (req, res, next) => {
    res.render("add-journal", {
      pageTitle: "Add-Journal",
      path: "/add-journal",
    });
});

route.post('/add-journal', (req, res, next) => {
    const identity = new ID();
    journal.push({id: identity.id, 
                  title: req.body.title, 
                  desc:req.body.description,
                  date: getDayYear(),
                  time: getTime()})
    console.log(journal)
    res.redirect('/')
});


exports.routes = route;
exports.journal = journal;