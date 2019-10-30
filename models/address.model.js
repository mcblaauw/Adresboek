// libraries
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const faker = require("faker/locale/nl");

// connect to MongoDB database
const connectionString = "mongodb+srv://mcblaauw:pqgCU3ex0XHNDkLY@cluster0-kwpgf.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) { return console.log('Can not connect to the database: '+ err); } 
    else {console.log("MongoDB connection established!")};
});

// create new schema blueprint
const Schema = mongoose.Schema;
let AddressSchema = new Schema({
    name: {type: String, required: true, max: 100},
    avatar: {type: String, required: true, max: 200},
    address: {type: String, required: true, max: 100},
    zipcode: {type: String, required: true, max: 6},
    city: {type: String, required: true, max: 100},
    country: {type: String, required: true, max: 100},
});

//Export the Model into the blueprint
module.exports = mongoose.model('Address', AddressSchema);