var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/sign-in', function(req, res, next) {
    res.render('signin', { title: 'SignIn' });
});

router.get('/sign-up', function(req, res, next) {
    res.render('signup', { title: 'SignUp' });
});

module.exports = router;