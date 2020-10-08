var express = require('express');
var userRoute = require('./routes/user.route');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

app.use('/users', userRoute);

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