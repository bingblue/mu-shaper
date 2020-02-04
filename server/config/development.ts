let development = {
  website: {
    port: 3000,
    cert: './secret/mu-shaper.pem',
    key: './secret/mu-shaper.key',
    swagger: true
  },
  db: {
    mysql: {
      host: '122.51.109.178',
      port: 3306,
      username: 'root',
      password: 'U!5J%X*CKCABPOXX',
      database: 'mu_shaper'
    },
    redis: {
      host: '122.51.109.178',
      port: 6379,
      password: 'Bingblue123'
    }
  },
  auth: {
    ignorePath: ['/', '/auth', '/auth/**'],
    jwt: {
      secretOrKey: 'localhost',
      expiresIn: '2h',
      issuer: 'localhost',
      audience: 'localhost'
    },
    ratelimit: {
      duration: 60000,
      max: 10,
      errorMessage: '您请求次数过多，请稍后尝试！'
    }
  }
}
export default development
