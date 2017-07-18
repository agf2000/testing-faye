var express = require('express');
var router = express.Router();
var faye = require('faye');
var client = new faye.Client('http://localhost:3000/faye');

/* GET home page. */
router.get('/', function (req, res, next) {
  client.publish("/messages", {
    text: 'Hello'
  });
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;