import Router from 'koa-joi-router'
import User from '../../controllers/User'
const Joi = Router.Joi
const router = Router()
const info = {
  summary: '用户信息',
  tags: ['user']
}
router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取用户信息'
    }
  },
  method: 'get',
  path: '/info',
  handler: User.info
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '模糊查询用户'
    }
  },
  method: 'get',
  path: '/search',
  handler: User.search
})

export default router
