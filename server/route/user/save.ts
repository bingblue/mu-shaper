'use strict'
import * as router from 'koa-joi-router'
const route = router()
// 访问路由：ip:port/user/save/save
route.get('/save', async (ctx) => {
  ctx.body = 'user/save.ts'
})
export default route
