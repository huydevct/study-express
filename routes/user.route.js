var express = require('express');
var multer  = require('multer');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddlewares = require('../middlewares/auth.middleware');

var upload = multer({ dest: './public/uploads/' });

var router = express.Router();

module.exports = router;

router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send('Hello');
});
router.get('/create', controller.create);

router.post('/create', 
    upload.single('avatar'), 
    validate.postCreate, 
    controller.postCreate);

router.get('/search', controller.search);

router.get('/remove', controller.remove);

router.post('/remove', controller.postRemove);

router.get('/:id', controller.get);


