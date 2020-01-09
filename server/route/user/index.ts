import router from 'koa-joi-router'
import passport from 'koa-passport'
import User from '../../controllers/User'
const Joi = router.Joi
const route = router()
// 访问路由：ip:port/user/
route.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
// 访问路由：ip:port/user/info
route.get('/info', passport.authenticate('jwt', { session: false }), async (ctx) => {
  ctx.body = 'user/index.ts'
})
route.post('/info', async (ctx) => {
  ctx.body = {
    code: 200,
    body: ctx.req.user,
    message: 'user/index.ts [post]'
  }
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
