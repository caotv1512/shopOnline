const express = require('express');
const router = express.Router();

const {getAdmin, postIndex, getIndex } = require('../controller/admin/admin.controller.js')

router.get('/admin', getIndex);
router.get('admin/all-acount', postIndex);
router.get('/admin/create', getAdmin);


module.exports = router;