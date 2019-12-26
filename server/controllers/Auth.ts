import passport from 'koa-passport'
import JWT from 'jsonwebtoken'
import { ContextBody, Context } from '../common/@types'
import config from '../config'
import User from './User'

class Auth {
  static async login (ctx: Context): Promise<void> {
    
  }
  static async logout (ctx: Context): Promise<void> {
    
  }
  static async github (ctx: Context): Promise<void> {
    
  }
  static async githubcb (ctx: Context): Promise<void> {
    
  }
  createJWT(id: string): string {
    const { secret, ...opts } = config.auth.jwt
    return JWT.sign({ id }, secret, opts)
  }
}
export default Auth
