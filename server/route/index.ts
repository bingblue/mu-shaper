import * as router from 'koa-joi-router'
import * as glob from 'glob'
const route = router()
// 访问路由：ip:port/
route.get('/', async (ctx) => {
  ctx.body = 'index.ts'
})

/**
 * 加载路由，读取当前目录下所有[文件夹名/文件名(除index)]作为prefix
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-12-18
 **/
glob.sync('**/*.ts', { cwd: __dirname }).forEach(async file => {
  const routes = (await import('./' + file)).default
  const prefixPath = '/' + file.replace(/\.[^.]*$/, '').replace('/index', '')
  if (prefixPath === '/index') return
  routes.prefix(prefixPath)
  route.use(routes.middleware())
})
export default route.middleware()
