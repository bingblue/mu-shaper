// import * as http2 from 'http2'
import * as Koa from 'koa'
import * as error from 'koa-onerror'
import route from './route'
import { logger } from './common/middleware'
import Config from './config'
const app = new Koa()

// 错误处理
error(app)

// 日志中间件
app.use(logger)

// 加载路由
app.use(route)

// 启动服务
app.listen(Config.website.port)

// http2 启动服务
// const server = http2.createSecureServer({
//   cert: Config.website.cert,
//   key: Config.website.key
// }, app.callback())
// server.listen(Config.website.port, () => {
//   console.log(`服务已启动，请监听https://localhost:${Config.website.port} 端口。`)
// })
