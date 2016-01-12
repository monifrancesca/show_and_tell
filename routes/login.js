/**
 * Created by newmac on 1/7/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    User.forge()
        .where('email', '=', req.body.email)
        .fetch()
        .then(function(collection) {
            res.json(collection);
        })
        .catch(function(e){
            console.log("Error retrieving users", e);
            res.sendStatus(500);
        });

});


module.exports = router;
