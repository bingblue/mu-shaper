import * as router from 'koa-joi-router'
import User from '../../controllers/User'
const Joi = router.Joi
const route = router()
// 访问路由：ip:port/user/
route.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
route.route({
  method: 'get',
  path: '/find',
  validate: {
    query: {
      name: Joi.string().required()
    }
  },
  handler: User.getByName
})
export default route
