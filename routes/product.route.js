const express = require('express');
const router = express.Router();
const {getProduct,getProducts,createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',authMiddleware,validateProduct,createProduct);
router.put('/:id',authMiddleware,validateProduct,updateProduct);
router.delete('/:id',authMiddleware,deleteProduct);

module.exports = router