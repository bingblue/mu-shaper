const test = {
  website: {
    port: 3001,
    cert: './secret/mu-shaper.pem',
    key: './secret/mu-shaper.key',
    swagger: true
  },
  db: {
    mysql: {
      host: 'test',
      port: 1000,
      username: 'test',
      password: 'test',
      database: 'mu_shaper'
    }
  },
  auth: {
    ignorePath: ['/', '/auth', '/auth/**'],
    jwt: {
      secretOrKey: 'test',
      expiresIn: '1h',
      issuer: 'www.xx.com',
      audience: 'www.xx.com'
    }
  }
}
export default test
