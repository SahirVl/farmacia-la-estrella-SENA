function errorHandler(err, req, res, next) {
  const timestamp = new Date().toISOString();
  const route = `${req.method} ${req.originalUrl}`;

  // Sequelize: Validación de campos
  if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map(e => ({
      field: e.path,
      issue: e.message,
      type: e.validatorKey || 'validation'
    }));

    console.warn(`⚠️ [${timestamp}] ${route} - Validación fallida`, errors);

    return res.status(400).json({
      error: 'Validación fallida',
      errors
    });
  }

  // Sequelize: Restricciones únicas
  if (err.name === 'SequelizeUniqueConstraintError') {
    const fields = err.errors.map(e => e.path).join(', ');
    console.warn(`⚠️ [${timestamp}] ${route} - Conflicto de datos en campos únicos: ${fields}`);

    return res.status(409).json({
      error: 'Conflicto de datos',
      message: `Ya existe un registro con los siguientes campos únicos: ${fields}`
    });
  }

  // Errores personalizados definidos por el desarrollador
  if (err.name === 'CustomError') {
    console.warn(`⚠️ [${timestamp}] ${route} - Error personalizado`, err.details || err.message);

    return res.status(err.statusCode || 400).json({
      error: err.message,
      details: err.details || null
    });
  }

  // Otros errores no controlados
  console.error(`❌ [${timestamp}] ${route} - Error inesperado`, err);

  return res.status(500).json({
    error: 'Error interno del servidor',
    message: 'Ocurrió un problema inesperado. Por favor intenta más tarde.'
  });
}

module.exports = errorHandler;
