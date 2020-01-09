import { EntityRepository, Repository } from 'typeorm'
import { util } from '../common/util'
import UserModel from '../models/User'

@EntityRepository(UserModel)
class User extends Repository<UserModel> {
  /** 根据名称查找用户 */
  findByName (name: string): object {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }

  /** 用户注册 */
  saveUser (user: any): object {
    const newUser = new UserModel()
    newUser.name = user.name
    newUser.address = user.address
    newUser.username = user.username
    newUser.phone = user.phone
    newUser.password = util.md5(user.password)
    return this.save(newUser)
  }

  /** 用户更新 */
  async updateUser (user: any): Promise<object> {
    const newUser = await this.findOne(user.id)
    newUser.name = user.name
    newUser.address = user.address
    return this.save(newUser)
  }

  /** 判断用户名密码是否正确 */
  findByAuthentication (username: string, password: string): any {
    return this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .andWhere('user.password = :password', { password: util.md5(password) })
      .getOne()
  }
}
export default User
