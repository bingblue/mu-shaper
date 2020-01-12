import passport from 'koa-passport'
import minimatch from 'minimatch'
import { Context, Next } from '../@types'
import config from '../../config'

/**
 * 过滤需要使用JWT的接口
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const permission = async (ctx: Context, next: Next): Promise<any> => {
  const { ignorePath } = config.auth
  const check = ignorePath.some(i => {
    return minimatch(ctx.path, i)
  })
  if (check) {
    await next()
  } else {
    return passport.authenticate('jwt', { session: false })(ctx, next)
  }
}
export { permission }
