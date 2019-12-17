'use strict'
import * as router from 'koa-joi-router'
const route2 = router()
// 访问路由：ip:port/blog/
route2.get('/', async (ctx) => {
  ctx.body = 'hello blog!'
})
export default route2
