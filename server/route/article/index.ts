import Router from 'koa-joi-router'
import Article from '../../controllers/Article'
const Joi = Router.Joi
const router = Router()
const info = {
  summary: '文章',
  tags: ['article']
}
router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取文章列表'
    }
  },
  method: 'get',
  path: '/list',
  handler: Article.getList
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取文章详情'
    }
  },
  method: 'get',
  path: '/detail',
  handler: Article.getDetail
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取文章pv'
    }
  },
  method: 'get',
  path: '/pv',
  handler: Article.getPv
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '创建文章'
    }
  },
  method: 'post',
  path: '/create',
  handler: Article.postCreate
})

router.route({
  meta: {
    swagger: {
      ...info,
      description: '更新文章'
    }
  },
  method: 'post',
  path: '/update',
  handler: Article.postUpdate
})

export default router
