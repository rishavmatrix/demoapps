var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Got a get request at /')
});

router.put('/', function (req, res, next) {
  res.send('Got a PUT request at /')
});

router.delete('/', function (req, res, next) {
  res.send('Got a Delete request at /')
});

router.post('/', function (req, res, next) {
  res.send('Got a Post request at /')
});
module.exports = router;
