import passport from 'koa-passport'
import { ContextBody, Context } from '../common/@types'
import User from './User'

class Auth {
  static async find (ctx: Context): Promise<void> {
    const user = await User.find(ctx.request.query.name)
  }
  static async jwt (ctx: Context): Promise<void> {
    const user = await User.find(ctx.request.query.name)
  }
  serializeUser (): void {
    passport.serializeUser((user: any, done: Function): void => {
      done(null, user)
    })
  }
  deserializeUser (): void {
    passport.deserializeUser(async function (id: any, done: Function) {
      const user = await User.find(id)
      done(null, user)
    })
  }
}
export default Auth
