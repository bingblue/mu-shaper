import koaRatelimit from 'koa-ratelimit'
import { Context, Next } from '../@types'
import { redis } from '../db'
import config from '../../config'

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
    // errorMessage: '您请求次数过多',
    // duration: 60000,                                  // 限制时间，毫秒
    // max: 10,                                          // 限制时间里最多访问次数
    /** 白名单，返回true/false */
    // whitelist: (ctx: Context): boolean => {},
    /** 黑名单，返回true/false */
    // blacklist: (ctx: Context): boolean => {}
  })(ctx, next)
}
export { ratelimit }
