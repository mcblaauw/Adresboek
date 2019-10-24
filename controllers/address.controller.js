//establish database connection Address
const Address = require('../models/address.model');

exports.home = function(req,res) {
    Address.find({}, function(err,addresses) {
        if (err) {
            return next(err);
        } else {
            res.render('home',{addresses: addresses});
        }
    });
};

exports.address_create_ejs = function(req,res) {
    res.render('address/create');
};

exports.address_create = function(req,res) {
    // Create instance of an object and insert POST req data
    let address = new Address(req.body.address);

    // save to database using save() applied on instance 'address'
    address.save(function (err) {
        if (err) return next(err);
        res.send('New address added successfully')
    });

    Address.find({}, function(err,addresses) {
        if (err) {
            return next(err);
        } else {
            res.redirect('home',{addresses: addresses});
        }
    });
};

exports.address_read = function(req,res) {
    Address.findById(req.params.id, function(err, address) {
        if (err) return next(err);
        res.send(address);
    })
};

exports.address_update = function(req,res) {
    Address.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, address) {
        if (err) return next(err);
        res.send('Address has been updated');    
    })
};

exports.address_delete = function(req,res) {
    Address.findByIdAndDelete(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Address has been deleted!');    
    })
};

// Simple version without validation or sanitation yet
exports.test = function(req,res) {
    res.send('Test controller is working!');
};