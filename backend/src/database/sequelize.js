const { Sequelize } = require('sequelize');
const { config } = require('../config/config')
const setupModels = require("../models");

const sequelize = new Sequelize(config.database,config.username,config.password, {
  host: config.host,
  dialect: 'mysql',
  logging: false,
  timezone: '-05:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a MySQL');

    // 🔁 Inicializa los modelos
    setupModels(sequelize);

    // 💾 Sincroniza después de registrar modelos
    // await sequelize.sync({force: true}); <<-- ojo en produccion, mejor usar migraciones
    console.log('✅ Todas las tablas fueron sincronizadas correctamente');

    // 📚 Mostrar tablas
    const tables = await sequelize.query("SHOW TABLES", {
      type: sequelize.QueryTypes.SHOWTABLES
    });
    console.log('📚 Tablas en MySQL:');
    console.log(tables);

    // 👀 Mostrar modelos registrados
    console.log('Modelos registrados:', Object.keys(sequelize.models));
  } catch (error) {
    console.error('❌ Error al sincronizar o conectar:', error);
  }
})();

module.exports = sequelize