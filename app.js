// Import required libraries
const express = require("express");
const bodyParser = require("body-parser");

// import routes for app, inside routes model functions and Db are called upon.
const address = require('./routes/address.route'); 
const app = express(); //start the app

app.set("view engine","ejs"); 
app.use(express.static("public"));
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/address/', address); //use '/' root for all subsequent address routes

let port = 3000;

app.listen(port,function(){
	console.log("Connecting to new server on port: "+port);
});