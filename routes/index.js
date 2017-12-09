var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scope' });
});

router.get('/main', function(req, res, next) {
  res.render('other', {title: 'Other'});
});

module.exports = router;
