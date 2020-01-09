import glob from 'glob'
import router from 'koa-joi-router'
import { SwaggerAPI } from 'koa-joi-router-docs'
import config from '../config'
const route = router()
// 访问路由：ip:port/
route.get('/', async (ctx) => {
  throw new Error('抛出异常！')
  ctx.body = 'index.ts'
})

/**
 * 加载路由，读取当前目录下所有[文件夹名/文件名(除index)]作为prefix
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-08
 **/
glob.sync('**/*.ts', { cwd: __dirname }).forEach(file => {
  // const routes = (await import('./' + file)).default
  const routes = require('./' + file).default
  const prefixPath = '/' + file.replace(/\.[^.]*$/, '').replace('/index', '')
  if (prefixPath === '/index') return
  /** 此处写法总觉得不规范，有更好的方法请联系我 */
  // routes.prefix(prefixPath)
  routes.routes.forEach(item => {
    item.path = prefixPath + item.path
  })
  route.route(routes.routes)
})

if (config.website.swagger) {
  const generator = new SwaggerAPI()
  generator.addJoiRouter(route)
  const spec = generator.generateSpec({
    info: {
      title: 'API文档',
      description: 'Mu-shaper接口文档。',
      version: '0.0.9'
    },
    basePath: '/',
    tags: [{
      name: 'auth',
      description: '权限模块接口。'
    }, {
      name: 'blog',
      description: '博客模块接口。'
    }, {
      name: 'user',
      description: '用户模块接口。'
    }]
  })
  route.get('/doc/swagger.json', async ctx => {
    ctx.body = JSON.stringify(spec, null, '  ')
  })
  route.get('/doc', async ctx => {
    ctx.body = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>API 文档</title>
    </head>
    <body>
      <redoc spec-url='/doc/swagger.json' lazy-rendering></redoc>
      <script src="https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js"></script>
    </body>
    </html>
    `
  })
}
export default route.middleware()
