const express = require('express');
const chirps = require('./chirps.js');
const router = express.Router();


router.use('/chirps', chirps)



module.exports = router;