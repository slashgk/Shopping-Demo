require('./config/config');

const express = require('express');
const bodyPraser = require('body-parser'); 

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyPraser.json());

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