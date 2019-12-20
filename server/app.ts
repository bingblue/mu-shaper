import * as http2 from 'http2'
import * as Koa from 'koa'
import * as error from 'koa-onerror'
import route from './route'
import { logger } from './common/middleware'
import { Util3 } from './common/util'
import Config from './config/config'
const app = new Koa()
console.log('====>', Util3.isArray('aa'))
// 错误处理
error(app)

// 日志中间件
app.use(logger)

// 加载路由
app.use(route)

// 启动服务
app.listen(Config.website.port)

// const server = http2.createSecureServer({
//   cert: Config.website.cert,
//   key: Config.website.key
// }, app.callback())
// server.listen(Config.website.port, () => {
//   console.log(`服务已启动，请监听https://localhost:${Config.website.port} 端口。`)
// })
