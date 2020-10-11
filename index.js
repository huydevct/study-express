var express = require('express');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddlewares = require('./middlewares/auth.middleware');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser('qwertyui3456789asdfbghnj'));

app.use('/users', authMiddlewares.requireAuth, userRoute);
app.use('/auth', authRoute);

app.use(express.static('public'));

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