'use strict'
import { route as routers, Joi } from '../common/route'
routers.prefix('/')
routers.get('/', async (ctx) => {
  ctx.body = 'hello joi-router!'
})

routers.route({
  method: 'post',
  path: '/signup',
  validate: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100)
    },
    type: 'json', // 只有验证body时需要type
    output: {
      200: {
        body: {
          userId: Joi.string().required(),
          name: Joi.string(),
          params: Joi.object(),
          body: Joi.object(),
        }
      }
    }
  },
  handler: async (ctx) => {
    console.log(ctx.request.params)
    ctx.status = 200
    ctx.body = {
      userId: '12313',
      name: 'xiaomucool',
      params: ctx.request.params,
      body: ctx.request.body
    }
  }
})
routers.get('/signup', {
  validate: {
    query: {
      name: Joi.string().required(),
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100)
    },
    output: {
      200: {
        body: {
          userId: Joi.string().required(),
          name: Joi.string(),
          query: Joi.object(),
          params: Joi.object(),
          body: Joi.object(),
          request: Joi.object()
        }
      }
    }
  }
}, async (ctx) => {
  console.log(ctx.request.params)
  ctx.status = 200
  ctx.body = {
    userId: '12313',
    name: 'xiaomucool',
    query: ctx.request.query,
    params: ctx.request.params,
    body: ctx.request.body
  }
})
export default routers.middleware()
