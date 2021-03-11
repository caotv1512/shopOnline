const express = require('express');
const router = express.Router();
const { deleteProduct, getProduct, postProduct, getAllProduct, getProductId } = require('../controller/products.controller')
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' })

router.route("/products/product").get(getProduct).post(upload.single('avatar'), postProduct);
router.route("/products/all-product").get(getAllProduct) 
router.route("/product/:id").get(getProductId).delete(deleteProduct);

// router.route('/product/:id')
// .patch(userController.updateUser)
// .delete(userController.deleteProduct)
module.exports = router;
