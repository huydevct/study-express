var express = require('express');

var controller = require('../controllers/auth.controller');

var router = express.Router();

module.exports = router;

router.get('/login', controller.login);

router.post('/login', controller.postLogin);
