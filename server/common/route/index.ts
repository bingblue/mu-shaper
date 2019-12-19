import * as router from 'koa-joi-router'
const Joi = router.Joi
const route = router()
// 无法实现多例模式
export { route, Joi }
