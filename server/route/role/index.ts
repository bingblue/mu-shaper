import router from 'koa-joi-router'
import Role from '../../controllers/Role'
const Joi = router.Joi
const route = router()

route.route({
  meta: {
    swagger: {
      summary: '路由',
      description: '获取用户菜单信息',
      tags: ['role']
    }
  },
  method: 'get',
  path: '/routes',
  handler: Role.getRoutes
})

route.route({
  meta: {
    swagger: {
      summary: '路由',
      description: '获取用户权限信息',
      tags: ['role']
    }
  },
  method: 'get',
  path: '/roles',
  handler: Role.getRoles
})

route.route({
  meta: {
    swagger: {
      summary: '路由',
      description: '添加权限',
      tags: ['role']
    }
  },
  method: 'post',
  path: '/role',
  handler: Role.postRole
})

route.route({
  meta: {
    swagger: {
      summary: '路由',
      description: '更新权限',
      tags: ['role']
    }
  },
  method: 'put',
  path: '/role/:id',
  handler: Role.putRole
})

route.route({
  meta: {
    swagger: {
      summary: '路由',
      description: '删除权限',
      tags: ['role']
    }
  },
  method: 'delete',
  path: '/role/:id',
  handler: Role.putRole
})

export default route
