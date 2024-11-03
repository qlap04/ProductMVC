const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products-test')

const Product = mongoose.model('Product', {
    title: String,
    description: String,
    category: String,
    price: Number,
    images: [String],
    thumbnail: String
})

module.exports = Product