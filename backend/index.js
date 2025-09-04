const express = require('express');
const session = require('express-session');
const cors = require('cors');
const applySecurity = require('./src/middlewares/security'); // 👈 Seguridad modular

const routerUser = require('./src/routes/user.route');
const routerAuth = require('./src/routes/auth.route');
const routerProduct = require('./src/routes/product.route');
const routerCategory = require('./src/routes/category.route');
const errorHandler = require('./src/middlewares/error.handler');
const { config } = require('./src/config/config');

const app = express();
const port = config.port;

// 🛡️ CORS antes de cualquier middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// 🧠 Middlewares base
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 🔐 Seguridad modular
applySecurity(app);

// 🔐 Sesión // falta implementar strategies
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: false,
}));

// 🌐 Rutas
app.get('/', (req, res) => {
  res.send('salud desde el backend!');
});

app.use('/', routerAuth);
app.use('/', routerUser);
app.use('/', routerProduct);
app.use('/', routerCategory);

// 🧯 Manejo de errores
app.use(errorHandler);

// 🚀 Inicio del servidor
app.listen(port, () => {
  console.log(`app listening on 🚀 http://localhost:${port}`);
});