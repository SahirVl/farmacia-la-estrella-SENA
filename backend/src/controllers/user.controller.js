const { request, response } = require("express");
const UserService = require("../services/user.service");
const sequelize = require("../database/sequelize")
const service = new UserService(sequelize);

async function createUser(req = request, res = response, next) {
  try {
    const user = await service.create(req.body);
    
    res.status(201).json(user);
  } catch (error) {
    next(error)
    //res.status(400).json({ message: error.message });
  }
}

async function userList(req = request, res = response) {
  try {
    const users = await service.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateUser(req = request, res = response, next)  {
  const { id } = req.query;
  const data = req.body;

  try {
    const updatedUser = await service.update(id, data);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error)
  }
};

/*async function createCustomer(req = request, res = response, next) {
  try {
    const customer = await service.register(req.body);
    res.status(201).json(customer);
  } catch (error) {
    next(error)
  }
}

async function customerList(req = request, res = response) {
  try {
    const customers = await service.find();
    res.status(201).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
*/

module.exports = { createUser, userList, updateUser };