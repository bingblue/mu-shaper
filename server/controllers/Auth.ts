import passport from 'koa-passport'
import UserController from './User'
import { Context, Next } from '../common/@types'
import { util } from '../common/util'

class Auth {
  /** 用户名密码登录 */
  static async login (ctx: Context, next: Next): Promise<any> {
    // ctx.body = ctx.request.body
    return passport.authenticate('local', { session: false }, (err, user) => {
      const code = user ? 200 : 401
      const msg = err || (user ? '登录成功！' : '用户名或密码错误！')
      ctx.body = util.getBody(user, msg, code)
    })(ctx, next)
  }

  /** 用户登出 */
  static async logout (ctx: Context): Promise<void> {
    ctx.body = '登出成功！'
  }

  /** 用户注册 */
  static async join (ctx: Context, next: Next): Promise<void> {
    return UserController.save(ctx)
  }

  /** Github授权登录 */
  static async github (ctx: Context): Promise<void> {

  }

  /** Github登录回调 */
  static async githubcb (ctx: Context): Promise<void> {

  }
}
export default Auth
