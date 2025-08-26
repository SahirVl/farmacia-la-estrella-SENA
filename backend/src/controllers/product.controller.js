const { request, response } = require("express");
const ProductService = require("../services/product.service");
const sequelize = require("../database/sequelize")
const service = new ProductService(sequelize);

async function newProduct(req = request, res = response) {
  try {
    const product = await service.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Listado de todos los productos
async function allProducts(req = request, res = response) {
  try {
    const products = await service.productList();
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {newProduct, allProducts}