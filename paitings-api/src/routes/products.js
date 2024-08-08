const { Router } =  require("express");
const { ProductsController } = require("../controllers/products");

const router = new Router();

router.get("/products", ProductsController.getProducts);
module.exports = { router };
