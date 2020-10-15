// var db = require('../db');
var Product = require('../models/product.models');

module.exports.index = async function(req,res,next){
    // var page = parseInt(req.query.page) || 1;
    // var perPage = 8;
    
    // var start = (page - 1) * perPage;
    // var end  = page * perPage;

    // var drop = (page - 1) * perPage;
    
    // res.render('products/index', {
    //     products: db.get('products').value().slice(start, end)
    //     // products: db.get('products').drop(drop).take(perPage).value()
    // });

    // errors handling:
    try{
        var products = await Product.find();
        // products.foo();
        res.render('products/index', {
            products: products
    });
    } catch (error){
        next(error);
    }
    
};