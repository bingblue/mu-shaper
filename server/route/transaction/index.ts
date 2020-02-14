import Router from 'koa-joi-router'
import Transaction from '../../controllers/Transaction'
const Joi = Router.Joi
const router = Router()
const info = {
  summary: '交易',
  tags: ['transaction']
}
router.route({
  meta: {
    swagger: {
      ...info,
      description: '获取交易列表'
    }
  },
  method: 'get',
  path: '/list',
  handler: Transaction.getList
})

export default router
