const Address = require('../models/address.model');
//const Address = [];

// Simple version without validation or sanitation yet
exports.test = function(req,res) {
    res.send('Test controller is working!');
};
