// import http2 from 'http2'
import Koa from 'koa'
import error from 'koa-onerror'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
import ratelimit from 'koa-ratelimit'
import config from './config'
import route from './route'
import { logger, passport, permission, swagger } from './common/middleware'
import { logger as log } from './common/util'
import { mysql } from './common/db'
import 'reflect-metadata'

const app = new Koa()

// 错误处理
error(app, {
  all: function (err, ctx) {
    ctx.set('Content-Type', 'text/plain;charset=utf-8')
    ctx.body = err.message
    log.onerror(err, 'koa-onerror')
  }
})

// 日志中间件
app.use(logger)
// 跨域
app.use(cors({
  // Access-Control-Max-Age，减少复杂请求的预检请求[OPTIONS请求]
  maxAge: 864000
}))
// 限流
app.use(ratelimit({
  driver: 'redis',
  // db: new Redis(), // 需要引入redis
  duration: 60000, // 限制时间，毫秒
  errorMessage: '您尝试次数过多',
  id: (ctx) => ctx.ip,
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  max: 10,         // 限制时间里最多访问次数
  disableHeader: false,
  whitelist: (ctx) => {
    // 白名单，返回true/false
  },
  blacklist: (ctx) => {
    // 黑名单，返回true/false
  }
}))

// 解析用户信息放入 ctx.req.user
app.use(passport.initialize())
// JWT验证中间件
app.use(permission)

// 加载路由
app.use(route)

// swagger文档
app.use(swagger)

// 安全性
app.use(helmet())
// gzip压缩
app.use(compress())

// 启动数据库
mysql()

// 启动服务
app.listen(config.website.port, () => {
  log.info(`服务已启动，请监听https://localhost:${config.website.port} 网址。`)
})

// http2 启动服务
// const { port, cert, key } = config.website
// const server = http2.createSecureServer({
//   cert: cert,
//   key: key
// }, app.callback())
// server.listen(port, () => {
//   console.log(`服务已启动，请监听https://localhost:${port} 网址。`)
// })
