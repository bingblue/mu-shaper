'use strict'
import * as router from 'koa-joi-router'
const Joi = router.Joi

const routers = router()

routers.get('/', async (ctx) => {
  ctx.body = 'hello joi-router!'
})

routers.route({
  method: 'get',
  path: '/signup',
  validate: {
    body: {
      name: Joi.string().max(100),
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100)
    },
    type: 'json',
    output: {
      200: {
        body: {
          userId: Joi.string(),
          name: Joi.string()
        }
      }
    }
  },
  handler: async (ctx) => {
    ctx.status = 200
    ctx.body = {
      userId: '12313',
      name: 'xiaomucool'
    }
  }
})
export default routers.middleware()
