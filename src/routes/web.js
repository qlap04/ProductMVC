const { config } = require('dotenv')
const express = require('express')
const router = express.Router()

//controller
const { products, getHomePage } = require('../controllers/homeController')

router.get('/homePage', getHomePage)
router.get('/products', products)

module.exports = router 