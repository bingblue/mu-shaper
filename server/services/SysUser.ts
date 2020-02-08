import { EntityRepository, Repository } from 'typeorm'
import { util } from '../common/util'
import SysUserModel from '../models/SysUser'

@EntityRepository(SysUserModel)
class SysUser extends Repository<SysUserModel> {
  /** 根据名称查找用户 */
  async findByName (username: string): Promise<object> {
    return this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getMany()
  }

  /** 用户注册 */
  async saveUser (user: any): Promise<object> {
    const newUser = new SysUserModel()
    newUser.address = user.address
    newUser.username = user.username
    newUser.phone = user.phone
    newUser.password = util.encode(user.password)
    return this.save(newUser)
  }

  /** 用户更新 */
  async updateUser (user: any): Promise<object> {
    let newUser = await this.findOne(user.id)
    newUser.address = user.address
    return this.save(newUser)
  }

  /** 用户更新 */
  async updateUserRole (userId: number, roleList: Array<any>): Promise<object> {
    let user = await this.findOne(userId)
    user.roles = roleList
    return this.save(user)
  }

  /** 判断用户名密码是否正确 */
  async findByAuthentication (username: string, password: string): Promise<any> {
    let user =  await this.createQueryBuilder('user')
      .where('user.username = :username', { username }).getOne()
    if (util.matches(password, user.password)) return user
    return false
  }
}
export default SysUser
