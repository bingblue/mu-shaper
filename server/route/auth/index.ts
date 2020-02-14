import Router from 'koa-joi-router'
import Auth from '../../controllers/Auth'
const Joi = Router.Joi
const router = Router()
const info = {
  summary: '登录',
  tags: ['auth']
}
router.route({
  meta: {
    swagger: {
      ...info,
      description: '用户名密码登录'
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

router.route({
  meta: {
    swagger: {
      ...info,
      description: '登出'
    }
  },
  method: 'post',
  path: '/logout',
  handler: Auth.logout
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '用户注册'
    }
  },
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

router.route({
  meta: {
    swagger: {
      ...info,
      description: 'github 账号登录'
    }
  },
  method: 'get',
  path: '/github',
  handler: Auth.github
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: 'github 账号登录回调'
    }
  },
  method: 'get',
  path: '/githubcb',
  handler: Auth.githubcb
})
export default router
