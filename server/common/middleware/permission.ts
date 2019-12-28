import * as passport from 'koa-passport'
import * as minimatch  from 'minimatch'
import { Context, Next } from '../@types'
import config from '../../config'

const permission = async (ctx: Context, next: Next): Promise<any> => {
  // isAuthenticated
  const { ignorePath } = config.auth
  const check = ignorePath.some(i => {
    // ctx.path.includes(i)
    return minimatch(ctx.path, i)
  })
  if (check) {
    await next()
  } else {
    passport.authenticate('jwt', { session: false })(ctx, next)
  }
}
export { permission }
