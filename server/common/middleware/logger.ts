import { Context, Next } from '../@types'
import { logger as log } from '../util'

const logger = async (ctx: Context, next: Next): Promise<void> => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  const level = ctx.status !== 200 ? 'error' : 'info'
  log.log(level, `${ctx.method} ${ctx.url} - ${ms}ms, status: ${ctx.status}, body: ${ctx.body}`)
}
export { logger }
