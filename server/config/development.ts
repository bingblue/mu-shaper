import production from './production'
let development = {
  website: {
    port: 3000,
    cert: './secret/mu-shaper.pem',
    key: './secret/mu-shaper.key',
    swagger: true
  },
  db: {
    mysql: {
      host: 'localhost',
      port: 3306,
      username: 'localhost',
      password: 'localhost',
      database: 'mu_shaper'
    },
    redis: {
      host: 'localhost',
      port: 6379,
      password: 'localhost'
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

// 故意引入production，这个文件不上传
development = production
export default development
