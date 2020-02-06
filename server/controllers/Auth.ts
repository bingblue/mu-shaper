import passport from 'koa-passport'
import { getCustomRepository } from 'typeorm'
import UserController from './User'
import { ContextBody, Context, Next } from '../common/@types'
import SysRoleRepository from '../services/SysRole'
import SysMenuRepository from '../services/SysMenu'

class Auth {
  /** 用户名密码登录 */
  static async login (ctx: Context, next: Next): Promise<any> {
    // ctx.body = ctx.request.body
    return passport.authenticate('local', { session: false }, (err, user) => {
      const code = user ? 200 : 401
      const msg = err || (user ? '登录成功！' : '用户名或密码错误！')
      ctx.body = {
        code,
        msg,
        token: user.token
      }
    })(ctx, next)
  }

  /** 获取验证码 */
  static async captchaImage (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      img: "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",
      msg: "操作成功",
      uuid: "97cfdb90955e4dd28892042e00118770"
    }
  }

  /** 获取用户信息 */
  static async getInfo (ctx: Context): Promise<void> {
    const sysRoleRepository = getCustomRepository(SysRoleRepository)
    const roles = await sysRoleRepository.getRolePermission(ctx.req['user'].userId)
    const sysMenuRepository = getCustomRepository(SysMenuRepository)
    const permissions = await sysMenuRepository.getMenuPermission(ctx.req['user'].userId)
    ctx.body = {
      code: 200,
      msg: "操作成功",
      permissions,
      roles,
      user: ctx.req['user']
    }
  }

  /** 获取路由信息 */
  static async getRouters (ctx: Context): Promise<void> {
    const sysMenuRepository = getCustomRepository(SysMenuRepository)
    const data = await sysMenuRepository.selectMenuTreeByUserId(ctx.req['user'].userId)
    ctx.body = {
      code: 200,
      msg: "操作成功",
      data
    }
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
