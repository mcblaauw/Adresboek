//establish database connection Address
const Address = require('../models/address.model');
const faker = require("faker/locale/nl");

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
    address['avatar'] = faker.image.avatar();

    // save to database using save() applied on instance 'address'
    address.save(function (err) {
        if (err) return next(err);
        console.log('New address added successfully')
        res.redirect('home');
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
        console.log('Address has been updated');    
    })
};

exports.address_delete = function(req,res) {
    Address.findByIdAndDelete(req.params.id, function(err) {
        if (err) return next(err);
        console.log('Address has been deleted!');   
        res.redirect('../home');
    })
};

// Simple version without validation or sanitation yet
exports.test = function(req,res) {
    res.send('Test controller is working!');
};