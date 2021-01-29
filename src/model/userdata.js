//Accessing Mongoose package
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb+srv://ABHI:ABHI@ictakfsd.omadk.mongodb.net/LIB?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    phone: String,
    password: String
});

//Model creation
var Userdata = mongoose.model('userdata', userSchema);

module.exports = Userdata;