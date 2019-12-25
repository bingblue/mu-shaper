import * as router from 'koa-joi-router'
import User from '../../controllers/User'
const Joi = router.Joi
const route = router()
// 访问路由：ip:port/user/save/save
route.get('/save', async (ctx) => {
  ctx.body = 'user/save.ts'
})
// 访问路由：ip:port/user/save
route.route({
  method: 'get',
  path: '/',
  validate: {
    query: {
      name: Joi.string().required(),
      address: Joi.string().required()
    }
  },
  handler: User.save
})
export default route
