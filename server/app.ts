// import http2 from 'http2'
import Koa from 'koa'
import error from 'koa-onerror'
import cors from 'koa2-cors'
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

// 解析用户信息放入 ctx.req.user
app.use(passport.initialize())
// JWT验证中间件
app.use(permission)

// 加载路由
app.use(route)

// swagger文档
app.use(swagger)

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
