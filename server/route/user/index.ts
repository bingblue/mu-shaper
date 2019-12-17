'use strict'
import { route } from '../../common/route'
route.get('/', async (ctx) => {
  ctx.body = 'user/index.ts'
})
export default route
