var mongoose = require('mongoose');

var Subcategory = mongoose.model('subcategory', {
    category: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    }
});

module.exports = {Subcategory};