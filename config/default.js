const config = {
  "host": process.env.API_HOST,
  "port": process.env.API_PORT,
  "public": "../public/",
  "paginate": {
    "default": 10,
    "max": 50
  },
  "authentication": {
    "entity": "usuarios",
    "service": "usuarios",
    "secret": process.env.API_SECRET,
    "authStrategies": [
      "jwt",
      "local"
    ],
    "jwtOptions": {
      "header": {
        "typ": "access"
      },
      "audience": "https://yourdomain.com",
      "issuer": "feathers",
      "algorithm": "HS256",
      "expiresIn": "1d"
    },
    "local": {
      "usernameField": "username",
      "passwordField": "password"
    }
  },
  "mysql": process.env.API_MYSQL
}

module.exports = config;
