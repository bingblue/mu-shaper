'use strict'
import * as http2 from "http2"
import * as Koa from 'koa'
import Config from './config/config'
const app = new Koa()
const server = http2.createSecureServer({
  cert: Config.website.cert,
  key: Config.website.key
}, app.callback())
server.listen(Config.website.port, () => {
  console.log(`Server listening on ${Config.website.port}`)
})
