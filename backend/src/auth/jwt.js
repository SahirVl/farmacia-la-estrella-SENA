const jwt = require("jsonwebtoken");
const { config } = require("../config/config");
const JWT_SECRET = config.jwt_secret;

function generarToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

function verificarToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = { generarToken, verificarToken };
