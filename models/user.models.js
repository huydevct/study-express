var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    phone: String,
    avatar: String,
    password: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;