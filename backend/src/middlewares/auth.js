const { verificarToken } = require("../auth/jwt");

function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    const user = verificarToken(token);
    if (!user)
        return res
            .status(401)
            .json({ mensaje: "Usted no cuenta con los permisos necesarios." });
    req.user = user;
    next();
}

module.exports = authenticate;
