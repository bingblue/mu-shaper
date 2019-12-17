'use strict'
import { route } from '../../common/route'
route.get('/', async (ctx) => {
  ctx.body = 'hello blog!'
})
export default route
