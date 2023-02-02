const express = require('express');
const bodyparser = require('body-parser')

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/', (req, res, next) => {
    res.render('index')
})


port = 8080;
console.log(`listening on http://localhost:${port}`);
app.listen(port);