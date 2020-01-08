import passport from 'koa-passport'
import minimatch  from 'minimatch'
import { Context, Next } from '../@types'
import config from '../../config'

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
