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
      description: '添加权限'
    }
  },
  method: 'post',
  path: '/',
  handler: Permit.postRole
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '更新权限'
    }
  },
  method: 'put',
  path: '/:id',
  handler: Permit.putRole
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '删除权限'
    }
  },
  method: 'delete',
  path: '/:id',
  handler: Permit.putRole
})

export default router
