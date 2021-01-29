//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://ABHI:ABHI@ictakfsd.omadk.mongodb.net/LIB?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;