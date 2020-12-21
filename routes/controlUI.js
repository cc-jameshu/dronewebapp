var express = require('express');
var router = express.Router();


/* GET joystick page. */
router.get('/', function(req, res, next) {
    res.render('controlUI', { title: 'Virtual Joystick' });
  });
  
  module.exports = router;