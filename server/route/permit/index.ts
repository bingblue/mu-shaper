import Router from 'koa-joi-router'
import Permit from '../../controllers/Permit'
const Joi = Router.Joi
const router = Router()
const info = {
  summary: '权限',
  tags: ['permit']
}
router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取用户菜单信息'
    }
  },
  method: 'get',
  path: '/routes',
  handler: Permit.getRoutes
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取用户权限信息'
    }
  },
  method: 'get',
  path: '/roles',
  handler: Permit.getRoles
})

export default router
