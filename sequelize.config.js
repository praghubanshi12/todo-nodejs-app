const { Sequelize } = require("sequelize");
const config = require('./config.json').dev;

module.exports = {
  sequelize: new Sequelize(
    config.db[config.db.dialect]?.dbName,
    config.db[config.db.dialect]?.user,
    config.db[config.db.dialect]?.password,
    {
      host: config.db.hostname,
      dialect: config.db.dialect,
      timezone: config.db.timezone,
      logging: false
    }
  )
}