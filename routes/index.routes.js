const express = require('express');
const router = express.Router();

const { checkUser } = require('../controllers/auth.controller')
const { getHomePage, getHomePage1 } = require('../controllers/users.controller')

router.get('/', getHomePage);
router.get('/index', checkUser, getHomePage1);
router.all("*", (req, res, next) => {
  res.render('err/Error404', { code: 404 });
});

module.exports = router;