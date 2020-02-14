import { Context } from '../common/@types'
import { routes, roles } from '../config/mock'

class Permit {
  /** 获取菜单 */
  static async getRoutes (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: routes
    }
  }

  /** 获取权限 */
  static async getRoles (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: roles
    }
  }

  /** 添加权限 */
  static async postRole (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      body: 300123
    }
  }

  /** 更新权限 */
  static async putRole (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      body: {
        status: 'success' + ctx.request.params.id
      }
    }
  }

  /** 删除权限 */
  static async deleteRole (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      body: {
        status: 'success' + ctx.request.params.id
      }
    }
  }
}

export default Permit
