import koaRatelimit from 'koa-ratelimit'
import { Context, Next } from '../@types'
import { redis } from '../db'
import config from '../../config'

/**
 * 限制用户的连接频率来防止暴力破解
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const ratelimit = async (ctx: Context, next: Next): Promise<any> => {
  return koaRatelimit({
    driver: 'redis',
    db: redis,
    id: (ctx: Context) => ctx.ip + ctx.url,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    disableHeader: false,
    ...config.auth.ratelimit
    /** 白名单，返回true/false */
    // whitelist: (ctx: Context): boolean => {},
    /** 黑名单，返回true/false */
    // blacklist: (ctx: Context): boolean => {}
  })(ctx, next)
}
export { ratelimit }
