import production from './production'
let development = {
  website: {
    port: 3000,
    cert: './secret/mu-shaper.pem',
    key: './secret/mu-shaper.key'
  },
  db: {
    mysql: {
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'mu_shaper'
    }
  },
  auth: {
    jwt: {
      secret: 'localhost',
      expiresIn: '2h',
      issuer: 'localhost',
      audience: 'localhost'
    }
  }
}

// 故意引入production，这个文件不上传
development = production
export default development
