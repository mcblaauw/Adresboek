// Import required libraries
const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");

const address = require('./routes/address.route'); // import routes for product

const app = express(); //start the app

//app.set("view engine","ejs"); 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', address); //use '/' root for all subsequent address routes

let port = 3000;

// Define initial variables
//var randomCard = faker.helpers.createCard(); 

app.listen(port,function(){
	console.log("Connecting to new server on port: "+port);
});