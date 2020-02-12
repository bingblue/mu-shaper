import { getCustomRepository } from 'typeorm'
import { Context } from '../common/@types'
import { util } from '../common/util'
import UserRepository from '../services/SysUser'
import RoleRepository from '../services/SysRole'

class User {
  /** 获取用户信息 */
  static async info (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      body: {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '超级管理员'
      }
    }
  }

  /** 根据名称查找用户 */
  static async find (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    ctx.body = util.getBody(user)
  }

  /** 保存用户 */
  static async save (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.saveUser(ctx.request.body)
    ctx.body = util.getBody(user)
  }

  /** 更新用户 */
  static async update (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const roleRepository = getCustomRepository(RoleRepository)
    let roles = await roleRepository.findByIds(ctx.request.query.roleIds)
    const user = await userRepository.updateUserRole(ctx.request.query.userId, roles)
    ctx.body = util.getBody(user)
  }
}
export default User
