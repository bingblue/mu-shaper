// import http2 from 'http2'
import Koa from 'koa'
import error from 'koa-onerror'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
import config from './config'
import route from './route'
import { logger, passport, permission, swagger, ratelimit } from './common/middleware'
import { logger as log } from './common/util'
import { mysql } from './common/db'
import 'reflect-metadata'

const app = new Koa()

/** 全局错误处理 */
error(app, {
  all: function (err, ctx) {
    ctx.set('Content-Type', 'text/plain;charset=utf-8')
    ctx.body = err.message
    log.onerror(err, 'koa-onerror')
  }
})

/** 日志中间件 */
app.use(logger)
/** 跨域 */
app.use(cors({
  maxAge: 864000 // 10天
}))
/** 限流 */
app.use(ratelimit)

/** JWT验证，解析用户信息放入 ctx.req.user */
app.use(passport.initialize())
app.use(permission)

/** 加载路由 */
app.use(route)

/** swagger文档 */
app.use(swagger)

/** 安全性 */
app.use(helmet())
/** gzip压缩 */
app.use(compress())

/** 启动数据库 */
mysql()

/** http 启动服务 */
app.listen(config.website.port, () => {
  log.info(`服务已启动，请监听https://localhost:${config.website.port} 网址。`)
})

/** http2 启动服务 */
// const { port, cert, key } = config.website
// const server = http2.createSecureServer({
//   cert: cert,
//   key: key
// }, app.callback())
// server.listen(port, () => {
//   log.info(`服务已启动，请监听https://localhost:${port} 网址。`)
// })
