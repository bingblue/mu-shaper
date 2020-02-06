import { EntityRepository, Repository } from 'typeorm'
import { util } from '../common/util'
import SysUserModel from '../models/SysUser'

@EntityRepository(SysUserModel)
class SysUser extends Repository<SysUserModel> {
  /** 根据名称查找用户 */
  findByName (name: string): object {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }

  /** 根据ID查找用户 */
  findByUserId (userId: number): object {
    return this.createQueryBuilder('user')
      .where('user.userId = :userId', { userId })
      .getOne()
  }

  /** 用户注册 */
  saveUser (user: any): object {
    const newUser = new SysUserModel()
    newUser.userName = user.userName
    newUser.userType = user.userType
    newUser.password = util.md5(user.password)
    return this.save(newUser)
  }

  /** 用户更新 */
  async updateUser (user: any): Promise<object> {
    const newUser = await this.findOne(user.id)
    newUser.userName = user.userName
    newUser.userType = user.userType
    return this.save(newUser)
  }

  /** 判断用户名密码是否正确 */
  async findByAuthentication (userName: string, password: string): Promise<any> {
    let user =  await this.createQueryBuilder('user')
      .where('user.userName = :userName', { userName }).getOne()
    if (util.matches(password, user.password)) return user
    return false
  }
}
export default SysUser
