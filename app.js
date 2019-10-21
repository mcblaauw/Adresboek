const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const faker = require("faker");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// Define initial variables
var Addresses = [];
var randomCard = faker.helpers.createCard(); 

// Routes here
app.get("/",function(req,res){
	res.render("home");
});

app.listen(port,function(){
	console.log("Connecting to new server on port: "+port);
});