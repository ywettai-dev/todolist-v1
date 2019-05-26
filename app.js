//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

let items = [];

//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//Express server
app.listen(process.env.PORT || port, () => console.log(`todolist-v1 starts on ${port}`));

//EJS view engine with express
app.set('view engine', 'ejs');

//Home
app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString('en-US', options);

    //res.render to send EJS
    res.render('list', {
        kindOfDay: day,
        newListItem: items
    });

});

app.post('/', (req, res) => {

    var item = req.body.todoItem;

    items.push(item);

    res.redirect('/');

});