const express = require('express');
const router = express.Router();

const { getOrder, getAdmin, postIndex, getIndex } = require('../controller/admin/admin.controller.js')

router.get('/admin', getIndex);
router.get('admin/all-acount', postIndex);
router.get('/admin/create', getAdmin);
router.get('/order-custom', getOrder);


module.exports = router;