const Address = require('../models/address.model');

exports.home = function(req,res) {
    res.render('home');
};

// Simple version without validation or sanitation yet
exports.test = function(req,res) {
    res.send('Test controller is working!');
};