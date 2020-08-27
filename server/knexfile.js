const path = require('path')
const info = require('./src/config/pg_info')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'cinephix',
      user: info.user,
      password: info.password
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
};
