var express = require('express');

var controller = require('../controllers/user.controller');

var router = express.Router();

module.exports = router;

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);
router.get('/search', controller.search);
router.get('/remove', controller.remove);
router.post('/remove', controller.postRemove);
router.get('/:id', controller.get);


