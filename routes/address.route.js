const express = require('express');
const router = express.Router();

//Require the controllers 
const address_controller = require('../controllers/address.controller');
//import as functions! to call for different routes

//homepage
router.get('/home',address_controller.home);
//test url to check if it works
router.get('/test',address_controller.test);

module.exports = router;