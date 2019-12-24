// import * as http2 from 'http2'
import * as Koa from 'koa'
import * as error from 'koa-onerror'
import 'reflect-metadata'
import config from './config'
import route from './route'
import { logger } from './common/middleware'
import { mysql } from './common/db'
const app = new Koa()

// 错误处理
error(app)

// 日志中间件
app.use(logger)

// 加载路由
app.use(route)

// 启动数据库
mysql()

// 启动服务
app.listen(config.website.port)

// http2 启动服务
// const { port, cert, key } = config.website
// const server = http2.createSecureServer({
//   cert: cert,
//   key: key
// }, app.callback())
// server.listen(port, () => {
//   console.log(`服务已启动，请监听https://localhost:${port} 端口。`)
// })
