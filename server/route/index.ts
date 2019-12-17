'use strict'
import * as router from 'koa-joi-router'
import * as glob from 'glob'
const Joi = router.Joi

const index = router()
index.get('/', async (ctx) => {
  ctx.body = 'index.ts'
})

// 加载路由
glob.sync('**/!(index).ts', {cwd: __dirname}).forEach(file => {
  // const route = require('./' + file)
  let urlPath = file.replace(/\.[^.]*$/, '').replace('routes', '').replace('/index', '/')
  console.log(urlPath)
  // route.prefix(urlPath)
  // index.use(route.middleware())
})

export default index.middleware()