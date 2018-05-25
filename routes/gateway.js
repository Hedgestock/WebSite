var express = require('express');
var router = express.Router();

/* GET gateway page. */
router.get('/', function(req, res, next) {
  res.render('gateway', { title: 'Portail' });
});


module.exports = router;
