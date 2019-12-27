import * as passport from 'koa-passport'
import { ContextBody, Context, Next } from '../common/@types'

class Auth {
  static async login (ctx: Context, next: Next): Promise<any> {
    return passport.authenticate('local', { session: false }, (err, user) => {
      ctx.body = { user, err }
    })(ctx, next)
  }
  static async logout (ctx: Context): Promise<void> {
    
  }
  static async join (ctx: Context): Promise<void> {
    
  }
  static async github (ctx: Context): Promise<void> {
    
  }
  static async githubcb (ctx: Context): Promise<void> {
    
  }
}
export default Auth
