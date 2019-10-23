// libraries
const mongoose = require('mongoose');
const faker = require("faker/locale/nl");

// connect to MongoDB database
const connectionString = "mongodb+srv://mcblaauw:pqgCU3ex0XHNDkLY@cluster0-kwpgf.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) { return console.log('Can not connect to the database: '+ err); } 
    else {console.log("MongoDB connection established!")};
});

// FAKER ADDRESS
var randomAddress = {
	name: faker.name.firstName()+" "+faker.name.lastName(),
	address: faker.address.streetName()+" "+Math.floor(Math.random()*100),
	zipcode: faker.address.zipCode(),
	city: faker.address.city(),
	country: "Nederland",
}; 
console.log(randomAddress);

// create new schema blueprint
const Schema = mongoose.Schema;
let AddressSchema = new Schema({
    name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    zipcode: {type: String, required: true, max: 6},
    city: {type: String, required: true, max: 100},
    country: {type: String, required: true, max: 100},
});

//Export the Model
var Address = new mongoose.model("Address", AddressSchema);

// Add data to the Model
// create() function
/* TEST CASE 
Address.create({ 
    name: "Marten Blaauw",
    address: "Onnemaheerd 144",
    zipcode: "9736ATH",
    city: "Groningen",
    country: "Nederland", 
}, function (err, small) {
    if (err) return handleError(err);
});
*/

// add new faker address object to database - collection "test"
/*
Address.create(randomAddress, function (err, small) {
    if (err) return handleError(err);
});
*/