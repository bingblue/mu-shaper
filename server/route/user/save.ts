'use strict'
import { route } from '../../common/route'
// 这里路由是：/user/save/save
route.get('/save', async (ctx) => {
  ctx.body = 'user/save.ts'
})
export default route
