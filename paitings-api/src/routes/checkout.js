const { Router } =  require("express");
const { CheckoutController } = require("../controllers/checkout");

const router = new Router();

router.post("/checkout", CheckoutController.checkout);
module.exports = { router };
