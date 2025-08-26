const sequelize = require("../database/sequelize");
const AuthService = require("../services/auth.service");
const service = new AuthService(sequelize);

async function loginController(req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await service.validateUser(email, password);
        req.session.user = {
            id: user.id,
            name: user.fullName,
            email: user.email,
            role: user.role,
        };
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

function logoutController(req, res) {
    req.session.destroy((err) => {
        if (err)
            return res.status(500).json({ error: "Error al cerrar sesión" });
        res.json({ message: "Logout exitoso" });
    });
}

module.exports = { loginController, logoutController };
