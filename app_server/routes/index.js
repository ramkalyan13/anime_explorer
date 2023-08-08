const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/review', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;