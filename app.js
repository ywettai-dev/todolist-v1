//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

let items = [];

//express public link
app.use(express.static('public/'));

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

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    //res.render to send EJS
    res.render('list', {
        kindOfDay: day,
        newListItems: items
    });

});

app.post('/', (req, res) => {

    let item = req.body.todoItem;

    items.push(item);

    res.redirect('/');

});