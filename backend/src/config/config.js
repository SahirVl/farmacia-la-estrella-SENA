require("dotenv").config();

const config = {
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    secret: process.env.SECRET,
    jwt_secret: process.env.JWT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    dialect: "mysql",
};

module.exports = { config };
