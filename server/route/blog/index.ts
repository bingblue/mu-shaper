import router from 'koa-joi-router'
const route = router()
// 访问路由：ip:port/blog/
route.get('/', async (ctx) => {
  throw new Error('asdasdad')
  ctx.body = 'hello blog!'
})
export default route
