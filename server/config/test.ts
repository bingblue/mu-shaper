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
    },
    redis: {
      host: 'test',
      port: 6379,
      password: 'test'
    }
  },
  auth: {
    ignorePath: ['/', '/auth', '/auth/**'],
    jwt: {
      secretOrKey: 'test',
      expiresIn: '1h',
      issuer: 'www.test.com',
      audience: 'www.test.com'
    },
    ratelimit: {
      duration: 60000,
      max: 10,
      errorMessage: '您请求次数过多，请稍后尝试！'
    }
  }
}
export default test
