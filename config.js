const config = {
  app: {
    port: 3030,
  },
  db: {
    host: "mysql-mcastellan.alwaysdata.net",
    user: "363082_grp9",
    password: "CaC24127GRP9",
    database: "mcastellan_grp9",
    dialect: "mysql",
  },
  StrongPassword: {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  },
  tokensJWT: {
    secretKey: "elpejerreydelriodelaplata",
    tokenExpiresIn: "10m",
  },
  bcrypt: {
    salt: 8,
  },
};

module.exports = config;
