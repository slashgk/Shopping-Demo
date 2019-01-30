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

app.post('/', (req,res) => {
    res.send('Hello');
});

app.post('/users', (req, res) => {
        var username = req.query.username;
        var password = req.query.password;


        User.findOne({
            "username" : username,
            "password" : password
        }).then((user) => {
            if(!user){ 
                return res.status(404).send();
            }
            res.send({user});
        }).catch((e) => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};