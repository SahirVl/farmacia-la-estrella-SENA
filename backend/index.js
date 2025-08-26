/*
const express = require('express');
//const passport = require('passport')

//const cors = require('cors');
const routerApi = require('./routes');

/*
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { config } = require('./config/config');


const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*const whitelist = [''];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

//require('./utils/auth')
//app.use(passport.initialize());


app.get('/', (req, res) => {
  res.send('MY SERVER RETO');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler) 

app.listen(port, () => {
  console.log('++++++ !HAPPY HACKING¡ ++++++');
}); 

*/

const express = require('express');
const session = require('express-session');
const cors = require('cors'); // 👈 Importa CORS

const routerUser = require('./src/routes/user.route');
const routerAuth = require('./src/routes/auth.route');
const routerProduct = require('./src/routes/product.route');
const routerCategory = require('./src/routes/category.route');
const errorHandler = require('./src/middlewares/error.handler');
const { config } = require('./src/config/config');

const app = express();
const port = config.port;

// 🛡️ Configura CORS antes de cualquier middleware
app.use(cors({
  origin: 'http://localhost:5173', // 👈 Aquí va la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // 👈 Si usas cookies o sesiones
}));

// 🧠 Middlewares de Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 🔐 Configuración de sesión (login manual)
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