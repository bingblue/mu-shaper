'use strict'
import * as router from 'koa-joi-router'
const Joi = router.Joi

const save = router()
save.get('/save', async (ctx) => {
  ctx.body = 'user/save.ts'
})

export default save.middleware()