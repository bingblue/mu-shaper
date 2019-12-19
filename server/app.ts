'use strict'
import * as http2 from 'http2'
import * as Koa from 'koa'
import * as error from 'koa-onerror'
import route from './route'
import * as util from './common/util'
import Config from './config/config'
const app = new Koa()
console.log(util)
// console.log(date.getMin('2019-12-19 13:50:22'))
// 错误处理
error(app)

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
