import { Context, Next } from '../@types'
import { logger as log } from '../util'

/**
 * 记录HTTP请求日志
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const logger = async (ctx: Context, next: Next): Promise<void> => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  const level = ctx.status !== 200 ? 'error' : ctx.body.code !== 200 ? 'info' : 'debug'
  log.log(level, `${ctx.method} ${ctx.url} - ${ms}ms`, {
    module: 'middleware',
    status: ctx.status,
    stack: ctx.body
  })
}
export { logger }
