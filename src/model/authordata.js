//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://ABHI:ABHI@ictakfsd.omadk.mongodb.net/LIB?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');


//Schema definition
const schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    author: String,
    books: String,
    genre: String,
    image: String
});

//Model creation
var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;