import router from 'koa-joi-router'
import User from '../../controllers/User'
const Joi = router.Joi
const route = router()

// 访问路由：ip:port/user/info
route.route({
  meta: {
    swagger: {
      summary: '用户信息',
      description: '获取用户信息',
      tags: ['user']
    }
  },
  method: 'get',
  path: '/info',
  handler: User.info
})

export default route
