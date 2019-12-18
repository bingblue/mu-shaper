'use strict'
import * as router from 'koa-joi-router'
import * as glob from 'glob'
const route = router()
// 访问路由：ip:port/
route.get('/', async (ctx) => {
  ctx.body = 'index.ts'
})

/**
 * 加载所有路由，读取所有[文件夹名/文件名]作为prefix
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-12-17
 **/
glob.sync('**/*.ts', { cwd: __dirname }).forEach(file => {
  const roter = require('./' + file).default
  const urlPath = '/' + file.replace(/\.[^.]*$/, '').replace('/index', '')
  if (urlPath === '/index') return
  roter.prefix(urlPath)
  route.use(roter.middleware())
})
export default route.middleware()
