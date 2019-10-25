const express = require('express');
const router = express.Router();

//Require the controllers 
const address_controller = require('../controllers/address.controller');
//import as functions! to call for different routes

// Homepage
router.get('/home',address_controller.home);
// Create address
router.get('/create',address_controller.address_create_ejs)
router.post('/create',address_controller.address_create);
// Read address from database
router.get('/:id',address_controller.address_read);
// Update existing address from database
router.put('/:id/update',address_controller.address_update);
// Delete existing address from database
router.get('/:id/delete',address_controller.address_delete);

//test url to check if it works
router.get('/test',address_controller.test);

module.exports = router;