const test = {
  website: {
    port: 3001,
    cert: './secret/mu-shaper.pem',
    key: './secret/mu-shaper.key'
  },
  db: {
    mysql: {
      host: 'test',
      port: 1000,
      username: 'test',
      password: 'test',
      database: "mu_shaper"
    }
  }
}
export default test
