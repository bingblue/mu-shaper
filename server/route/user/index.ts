'use strict'
import * as router from 'koa-joi-router'
const route = router()
// 访问路由：ip:port/user/
route.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
export default route
