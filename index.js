var express = require('express');
var app = express();

var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

var users = [
        {id: 1, name: 'Huy'},
        {id: 2, name: 'Van anh'}
];

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: users
    });
});

app.get('/users/create', (req,res) => {
    res.render('users/create');
});

app.post('/users/create', (req,res) => {
    users.push(req.body);
    res.redirect('/users');
});

// var searchInput = document.getElementById('input-field');
//     var value = searchInput.value;
//     console.log(value);
//     searchInput.addEventListener('change', function() {
//     sessionStorage.setItem('draft', searchInput.value)})
//     searchInput.value = sessionStorage.getItem('draft');

app.get('/users/search', (req,res) => {
    var q = req.query.q;
    var matchedUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users: matchedUsers
    });
});
app.listen(port, () => {
    console.log('Server is listening' + port);
});
