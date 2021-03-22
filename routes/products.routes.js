const express = require('express');
const router = express.Router();
const { deleteProduct, getProduct, postProduct, getAllProduct, getProductId } = require('../controller/products.controller')
const multer = require('multer');
const { get } = require('./users.routes');
const upload = multer({ dest: 'public/uploads/' })

router.route('/productsmanager/:id/delete').post(deleteProduct);
router.route("/product/:id").get(getProductId)
router.route("/createnewproduct").get(getProduct).post(upload.single('avatar'), postProduct);
router.route("/productsmanager").get(getAllProduct) 


// router.route('/product/:id')
// .patch(userController.updateUser)
// .delete(userController.deleteProduct)
module.exports = router;
