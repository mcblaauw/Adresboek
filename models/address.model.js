const mongoose = require('mongoose');

const connectionString = "mongodb+srv://mcblaauw:pqgCU3ex0XHNDkLY@cluster0-kwpgf.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString);

const Schema = mongoose.Schema;

let AddressSchema = new Schema({
    name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    zipcode: {type: String, required: true, max: 6},
    city: {type: String, required: true, max: 100},
    country: {type: String, required: true, max: 100},
});

//Export the Model
module.exports = mongoose.model('Address', AddressSchema);

