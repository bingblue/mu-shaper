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
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
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
      userId: Joi.number().required(),
      roleIds: Joi.array().required()
    }
  },
  handler: User.update
})
export default route
