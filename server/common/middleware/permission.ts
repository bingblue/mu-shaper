import * as passport from 'koa-passport'
import { Context, Next } from '../@types'
import config from '../../config'

const permission = async (ctx: Context, next: Next): Promise<any> => {
  // isAuthenticated
  const { ignorePath } = config.auth
  const check = ignorePath.some(i => ctx.path.includes(i))
  if (check) {
    next()
  } else {
    passport.authenticate('jwt', { session: false })(ctx, next)
  }
}
export { permission }
