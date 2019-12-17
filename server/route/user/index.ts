'use strict'
import * as router from 'koa-joi-router'
import save from './save'
const Joi = router.Joi

const user = router()
user.prefix('/user')

user.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
// 默认在/user下面
user.use(save)
export default user.middleware()