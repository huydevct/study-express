require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');

mongoose.connect(process.env.MONGO_URL);

var apiProductRoute = require('./api/routes/product.route');

var authMiddlewares = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); 

app.use('/api/products', apiProductRoute);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
// app.use(csurf({ cookie: true }));

app.use('/users', authMiddlewares.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddlewares.requireAuth, transferRoute);


app.use(express.static('public'));


//Routes
app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});

app.listen(port, () => {
    console.log('Server is listening ' + port);
});

// var searchInput = document.getElementById('input-field');
//     var value = searchInput.value;
//     console.log(value);
//     searchInput.addEventListener('change', function() {
//     sessionStorage.setItem('draft', searchInput.value)})
//     searchInput.value = sessionStorage.getItem('draft');