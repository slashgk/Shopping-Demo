var mongoose = require('mongoose');

var User = mongoose.model('users', {
    username: {
        type: String,
        required: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    }
});

module.exports = {User};