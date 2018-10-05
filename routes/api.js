const express = require('express');
const router = express.Router();
const jsontest = require('../public/json/testdata.json');


// Set Route for Tasks
router.get('/test', function(req, res) {
    res.send('API is OK');
    res.end();
});
router.get('/json', function(req, res) {
    res.json(jsontest);
});
module.exports = router;