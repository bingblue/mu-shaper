'use strict'
import * as router from 'koa-joi-router'
const Joi = router.Joi

const blog = router()
blog.prefix('/blog')
blog.get('/', async (ctx) => {
  ctx.body = 'hello blog!'
})


export default blog