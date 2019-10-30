//establish database connection Address
const Address = require('../models/address.model');
const faker = require("faker/locale/nl");

exports.home = function(req,res,next) {
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

exports.address_create = function(req,res,next) {
    // Create instance of an object and insert POST req data
    let address = new Address(req.body.address);
    address['avatar'] = faker.image.avatar();
    console.log(address);

    // save to database using save() applied on instance 'address'
    address.save(function (err) {
        if (err) return next(err);
        console.log('New address added successfully')
        res.redirect('home');
    });
};

exports.address_read = function(req,res,next) {
    Address.findById(req.params.id, function(err, addresses) {
        if (err) {
            return next(err);
        } else {
            res.render('address/show',{addresses: addresses});
        }
    });
};

exports.address_update = function(req,res,next) {
    Address.findByIdAndUpdate(req.params.id, {$set: req.body.address}, function(err, address) {
        if (err) { 
            return next(err);
        } else {
            console.log('Address has been updated!');
            res.redirect('../home');  
        }
    });
};

exports.address_delete = function(req,res,next) {
    Address.findByIdAndDelete(req.params.id, function(err) {
        if (err) {
            return next(err);
        } else {
            console.log('Address has been deleted!');   
            res.redirect('../home');
        }
    });
};

// Simple version without validation or sanitation yet
exports.test = function(req,res) {
    res.send('Test controller is working!');
};