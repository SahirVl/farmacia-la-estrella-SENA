const helmet = require('helmet');

function applySecurity(app) {
  app.disable('x-powered-by');

  app.use(helmet());

  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trusted.cdn.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  }));

  app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
  app.use(helmet.frameguard({ action: 'deny' }));
  app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));
}

module.exports = applySecurity;