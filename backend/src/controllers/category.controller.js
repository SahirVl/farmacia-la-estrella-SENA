const { request, response } = require("express");
const CategoryService = require("../services/category.service");
const sequelize = require("../database/sequelize")
const service = new CategoryService(sequelize);

async function addCategory(req = request, res = response) {
  try {
    const category = await service.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {addCategory}