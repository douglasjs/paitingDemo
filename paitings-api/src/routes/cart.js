const { Router } = require("express");
const { CartsController } = require("../controllers/cart");

const router = new Router();

router.get("/cart", CartsController.getCartItems);
router.get("/cart/:id", CartsController.getCart);
router.post("/cart", CartsController.createCart);
router.put("/cart/:id", CartsController.updateCart);
router.delete("/cart/:id", CartsController.deleteCart);
router.delete("/cart", CartsController.deleteWholeCart);
module.exports = { router };
