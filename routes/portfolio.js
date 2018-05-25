var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio/index', { title: 'Arthur PAMART' });
});

router.get('/index', function(req, res, next) {
  res.render('portfolio/index', { title: 'Arthur PAMART' });
});

/* GET cv page. */
router.get('/career/cv', function(req, res, next) {
  res.render('portfolio/career/cv', { title: 'Curriculum vitae' });
});

/* GET contact page. */
router.get('/career/contact', function(req, res, next) {
  res.render('portfolio/career/contact', { title: 'Contact' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('portfolio/about', { title: 'A propos' });
});

module.exports = router;
