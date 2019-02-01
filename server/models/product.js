var mongoose = require('mongoose');

var Product = mongoose.model('products', {
    productName: {
        type: String,
        required: true,
        minlength: 1
    },
    rate: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        minlength: 1
    },
    subcategory: {
        type: String,
        required: true,
        minlength: 1
    }
});

module.exports = {Product};