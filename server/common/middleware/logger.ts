import { Context } from 'koa'
import { logger as log } from '../util'

const logger = async (ctx: Context, next: Function) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  log.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
}
export { logger }
