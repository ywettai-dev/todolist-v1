//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//Custom Library
const date = require(__dirname + `/library/date.js`);

const items = [];
const workItems = [];

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

    let day = date.getDate();    

    //res.render to send EJS
    res.render('list', {
        listTitle: day,
        newListItems: items
    });

});

app.post('/', (req, res) => {

    let item = req.body.todoItem;
    let listTitle = req.body.todoSubmit;

    if (listTitle === 'Work') {

        workItems.push(item);

        res.redirect('/work');
    } else {

        items.push(item);

        res.redirect('/');
    }

});

//Work todo-list route
app.get('/work', (req, res) => {

    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems
    });

});

