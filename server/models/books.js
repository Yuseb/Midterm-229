let mongoose = require('mongoose');

// create a model class
let books = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});
module.exports = mongoose.model('books', books);
