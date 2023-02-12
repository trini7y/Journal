const path = require('path')
const express = require('express');
const bodyparser = require('body-parser')

const app = express();

const home = require('./routes/home');
const addjournal = require('./routes/add-journal')


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addjournal.routes);
app.use(home);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle:'Page Not Found'})
})


port = 8080;
console.log(`listening on http://localhost:${port}`);
app.listen(port);