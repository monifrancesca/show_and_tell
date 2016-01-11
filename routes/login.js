/**
 * Created by newmac on 1/7/16.
 */
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;
