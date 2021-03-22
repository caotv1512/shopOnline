const express = require('express');
const router = express.Router();
const {postThanhToan,getThanhToan,searchUser,index,getIndex,postIndex,getAllUsers,getUserId}= require('../controller/users.controller')


router.route("/").get(index).post(postIndex);
router.route("/home").get(index).post(postIndex);
router.route("/users/user").get(getIndex).post(postIndex);
router.route("/users/all-users").get(getAllUsers)
router.route("/users/all-users").get(searchUser);
router.route("/user/:id").get(getUserId);
router.route("/thanhtoan/:id").get(getThanhToan).post(postThanhToan);

module.exports = router;
