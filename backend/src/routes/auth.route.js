/*const { Router } = require("express");
const routerAuth = Router();
const { loginController, logoutController } = require('../controllers/auth.controller');

routerAuth.post('/login', loginController);
routerAuth.post('/logout', logoutController);

module.exports = routerAuth; */

const express = require("express");
const { login } = require("../controllers/auth.controller");
const {
    loginController,
    logoutController,
} = require("../controllers/auth.controller");
const routerAuth = express.Router();

routerAuth.post("/login", login);
routerAuth.post("/logout", logoutController);
module.exports = routerAuth;
