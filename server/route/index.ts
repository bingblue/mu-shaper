import * as glob from 'glob'
import * as router from 'koa-joi-router'
import { SwaggerAPI } from 'koa-joi-router-docs'
import config from '../config'

const route = router()
const generator = new SwaggerAPI()
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
  generator.addJoiRouter(routes)
  const prefixPath = '/' + file.replace(/\.[^.]*$/, '').replace('/index', '')
  if (prefixPath === '/index') return
  routes.prefix(prefixPath)
  route.use(routes.middleware())
})

if(config.website.swagger) {
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
      description: `权限模块接口。`
    },{
      name: 'blog',
      description: `博客模块接口。`
    },{
      name: 'user',
      description: `用户模块接口。`
    }],
  })
  route.get('/doc/swagger.json', async ctx => {
    ctx.body = JSON.stringify(spec, null, '  ')
  })
  route.get('/doc/redoc', async ctx => {
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
