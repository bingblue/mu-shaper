import { Context } from '../@types'
import { logger as log } from '../util'

const logger = async (ctx: Context, next: Function): Promise<void> => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  log.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
}
export { logger }
