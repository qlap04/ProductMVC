const Product = require('../models/Product');
const getHomePage = (req, res) => {
    res.render('adminStudy4.ejs')
}
const products = async (req, res) => {
    const products = await Product.find({});
    res.render('products.ejs', { products })
}
module.exports = {
    getHomePage,
    products
}