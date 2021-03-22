const express = require("express");
const router = express.Router();
const {
  requireSignin,
  adminMiddleware,
} = require("../controller/category.controller");
const {
  create,
  list,
  read,
  remove,
  update
} = require("../controller/category.controller");

router.post(
  "/category",
  adminMiddleware,
  create
);
router.get("/categories", list);
router.get("/category/:id", read);
router.delete("/category/:id", requireSignin, adminMiddleware, remove);
router.patch("/category/:id", requireSignin, adminMiddleware, update)

module.exports = router;
