const Config = {
  keys: [''],
  mongodb: {
    cookieSecret: '',
    db: '',
    host: '127.0.0.1',
    port: 0,
    url: 'mongodb://127.0.0.1:00/test'
  },
  sqe: [], // {_id: 'userId'}, {_id: 'groupId'}
  jwt: {
    secret: '' // 默认
  },
  mongodbSecret: { // mongodb用户和密码
    user: '',
    pass: ''
  },
  github: {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  },
  redis: {
    host: '127.0.0.1',
    port: 00,
    ttl: 00
  }
}

module.exports = Config
