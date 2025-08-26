const { Router } = require("express");

const { createUser, userList, updateUser } = require("../controllers/user.controller");
const routerUser = Router();

routerUser.post("/nuevo-usuario", createUser);
routerUser.get("/lista-usuarios", userList);
routerUser.put("/update", updateUser)

module.exports = routerUser;
