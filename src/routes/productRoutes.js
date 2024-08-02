const {Addproduct} = require('../controller/productController')
const express = require('express');
const router = express.Router()

router.post('/addProduct', Addproduct)

module.exports = router;