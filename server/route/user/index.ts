import * as router from 'koa-joi-router'
import User from '../../controllers/User'
const Joi = router.Joi
const route = router()
// 访问路由：ip:port/user/
route.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
// 访问路由：ip:port/user/find
route.route({
  method: 'get',
  path: '/find',
  validate: {
    query: {
      name: Joi.string().required()
    }
  },
  handler: User.find
})
// 访问路由：ip:port/user/update
route.route({
  method: 'get',
  path: '/update',
  validate: {
    query: {
      id: Joi.number().required(),
      name: Joi.string(),
      address: Joi.string()
    }
  },
  handler: User.update
})
export default route
