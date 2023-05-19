const { secret } = require('./config/jwt.config');
const jwt = require('jsonwebtoken');

// Logger middleware to log request details
const logger = (req, res, next) => {
  console.log(`Received: ${req.method} ${req.path} Body: ${req.body}`);
  next();
};

// Authentication middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // Verify the token using the secret key
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).send({
          message: 'Invalid Authorization Token.'
        });
      }

      // Attach the user object to the request for further processing
      req.user = user;
      next();
    });
  } else {
    // No authorization header present
    res.status(401).send({
      message: 'You must provide Authorization header to use this route.'
    });
  }
};

module.exports = {
  logger: logger,
  auth: authenticateJWT
};
