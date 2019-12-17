'use strict'
import { route } from '../common/route'
import * as glob from 'glob'
route.get('/', async (ctx) => {
  ctx.body = 'index.ts'
})

// 加载所有路由
glob.sync('**/*.ts', { cwd: __dirname }).forEach(file => {
  const route = require('./' + file).default
  const urlPath = '/' + file.replace(/\.[^.]*$/, '').replace('/index', '')
  if (urlPath === '/index') return
  route.prefix(urlPath)
  route.use(route.middleware())
})
export default route.middleware()
