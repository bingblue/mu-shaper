import router from 'koa-joi-router'
import Auth from '../../controllers/Auth'
const Joi = router.Joi
const route = router()
// 普通登录：ip:port/auth/login
route.route({
  meta: {
    swagger: {
      summary: '登录',
      description: '用户名密码登录',
      tags: ['auth']
    }
  },
  method: 'post',
  path: '/login',
  validate: {
    type: 'json',
    body: {
      username: Joi.string().required().description('用户名'),
      password: Joi.string().required().description('密码')
    }
  },
  handler: Auth.login
})
// 登出：ip:port/auth/logout
route.route({
  method: 'get',
  path: '/logout',
  handler: Auth.logout
})
// 注册：ip:port/auth/join
route.route({
  method: 'post',
  path: '/join',
  validate: {
    type: 'json',
    body: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.string()
    }).options({
      allowUnknown: true
    })
  },
  handler: Auth.join
})
// github登录：ip:port/auth/github
route.route({
  method: 'get',
  path: '/github',
  handler: Auth.github
})
// github登录回调：ip:port/auth/githubcb
route.route({
  method: 'get',
  path: '/githubcb',
  handler: Auth.githubcb
})
export default route
