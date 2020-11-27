/**
 * @file Root route for the Application.
 * @author Krutin Trivedi
*/

//importing the required modules
var express = require('express');
var router = express.Router();

//GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;