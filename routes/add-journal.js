const express = require('express');
const route = express.Router();

const journal = []

//Add the date created
function getMonthYear(){
  let date = new Date();
  let conv = String(date)
  return (conv.slice(8, 16));
}

function getTime(){
   let date = new Date();
   let conv = String(date);
   return (conv.slice(17, 21));
}
console.log(getMonthYear(), getTime())

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
                  desc:req.body.description})
    console.log(journal)
    res.redirect('/')
});


exports.routes = route;
exports.journal = journal;