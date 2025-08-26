const { Router } = require("express");

const { newProduct, allProducts } = require("../controllers/product.controller");
const routerProduct = Router();

routerProduct.post("/add-product", newProduct);
routerProduct.get("/all-products", allProducts);
//routerProduct.put("/update", updateUser)

module.exports = routerProduct;