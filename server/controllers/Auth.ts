import * as passport from 'koa-passport'
import UserController from './User'
import { ContextBody, Context, Next } from '../common/@types'
import { util } from '../common/util'

class Auth {
  static async login (ctx: Context, next: Next): Promise<any> {
    // ctx.body = ctx.request.body
    return passport.authenticate('local', { session: false }, (err, user) => {
      const code = user ? 200 : 401
      const msg = err || (user ? '登录成功！' : '用户名或密码错误！')
      ctx.body = util.getBody(user, msg, code)
    })(ctx, next)
  }
  static async logout (ctx: Context): Promise<void> {
    
  }
  static async join (ctx: Context, next: Next): Promise<void> {
    return UserController.save(ctx)
  }
  static async github (ctx: Context): Promise<void> {
    
  }
  static async githubcb (ctx: Context): Promise<void> {
    
  }
}
export default Auth
