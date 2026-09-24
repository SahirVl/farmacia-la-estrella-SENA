const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

class AuthService {
    async validateUser(email, password) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return { success: false, message: "Valida tus credenciales" };
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return { success: false, message: "Credenciales inválidas" };
        }

        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
            },
        };
    }
}

module.exports = AuthService;
