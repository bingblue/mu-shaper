'use strict'
import * as http2 from 'http2'
import * as Koa from 'koa'
import route from './route'
import Config from './config/config'
const app = new Koa()

// 加载路由
app.use(route)

// 启动服务
const server = http2.createSecureServer({
  cert: Config.website.cert,
  key: Config.website.key
}, app.callback())
server.listen(Config.website.port, () => {
  console.log(`服务已启动，请监听https://localhost:${Config.website.port} 端口。`)
})
