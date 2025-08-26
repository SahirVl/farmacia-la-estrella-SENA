const { Router } = require("express");

const { addCategory } = require("../controllers/category.controller");
const routerCategory = Router();

routerCategory.post("/add-category", addCategory);
//routerProduct.get("/lista-usuarios", userList);
//routerProduct.put("/update", updateUser)

module.exports = routerCategory;