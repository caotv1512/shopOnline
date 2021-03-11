const express = require('express');
const router = express.Router();
const {getLogin, postLogin}= require('../controller/auth.controller')


router.route("/admin/login").get(getLogin);
router.route("/admin/login").get(postLogin);

module.exports = router;
