require('./config/config');
const port = process.env.PORT || 3000;
const express = require('express');
const bodyPraser = require('body-parser'); 

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');

var app = express();



app.get('/',(req, res) => {
    res.sendfile('client/login.html');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.post('/users', (req, res) => {
    var user = new User({
        username: req.query.username,
        password: req.query.password
    });

    console.log(JSON.stringify(user));

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};