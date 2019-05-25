//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//Express server
app.listen(process.env.PORT || port, () => console.log(`todolist-v1 starts on ${port}`));

//EJS view engine
app.set('view engine', 'ejs');

//Home
app.get('/', (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 0 || currentDay === 6) {
        res.sendFile(__dirname + `/weekend.html`);
    } else {
        res.sendFile(__dirname + `/weekday.html`);
    }

});