const AuthService = require("../services/auth.service");
const { generarToken } = require("../auth/jwt");
const service = new AuthService();

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const result = await service.validateUser(email, password);

        if (!result.success) {
            return res.status(401).json({
                error: "Acceso denegado",
                message: result.message || "Valida tus credenciales",
            });
        }

        const token = generarToken(result.user);

        res.status(200).json({
            token,
            user: result.user,
        });
    } catch (err) {
        console.error("Error inesperado en login:", err);
        res.status(500).json({
            error: "Error interno del servidor",
            message:
                "Ocurrió un problema inesperado. Por favor intenta más tarde.",
        });
    }
}

function logoutController(req, res) {
    req.session.destroy((err) => {
        if (err)
            return res.status(500).json({ error: "Error al cerrar sesión" });
        res.json({ message: "Logout exitoso" });
    });
}

module.exports = { logoutController, login };
