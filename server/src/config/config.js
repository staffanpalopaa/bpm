module.exports = {
  port: process.env.PORT || 8081,
  db : {
    database: process.env.DB_NAME || 'bpm',
    user: process.env.DB_USER || 'bpm',
    password: process.env.DB_PASS || 'bpm',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bpm.sqlite'
    }
  }
}
