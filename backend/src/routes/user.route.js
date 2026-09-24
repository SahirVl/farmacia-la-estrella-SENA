const { Router } = require("express");

const {
    createUser,
    userList,
    updateUser,
} = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth");
const routerUser = Router();

routerUser.post("/nuevo-usuario", createUser);
routerUser.get("/lista-usuarios", authenticate, userList);
routerUser.put("/update", updateUser);

module.exports = routerUser;
