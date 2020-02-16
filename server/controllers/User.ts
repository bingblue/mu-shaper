import { getCustomRepository } from 'typeorm'
import { Context } from '../common/@types'
import { util } from '../common/util'
import UserRepository from '../services/SysUser'
import RoleRepository from '../services/SysRole'

class User {
  /** 获取用户信息 */
  static async info (ctx: Context): Promise<void> {
    let body = {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: '超级管理员'
    }
    if (ctx.request.query.token == 'editor-token') {
      body = {
        roles: ['editor'],
        introduction: 'I am a editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '用户'
      }
    }
    ctx.body = {
      code: 200,
      body: body
    }
  }

  /** 获取用户信息 */
  static async search (ctx: Context): Promise<void> {
    let nameList = []
    for(let i = 0; i <= 10; i++) {
      nameList.push(ctx.request.query.name + i)
    }
    ctx.body = {
      code: 200,
      body: {
        items: nameList
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
