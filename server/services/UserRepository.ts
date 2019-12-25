import { EntityRepository, Repository } from 'typeorm'
import User from '../models/User'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByName (name: string): object {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }
  saveUser (user: any): object {
    let newUser = new User()
    newUser.name = user.name
    newUser.address = user.address
    return this.save(newUser)
  }
  async updateUser (user: any): Promise<object> {
    let newUser = await this.findOne(user.id)
    newUser.name = user.name
    newUser.address = user.address
    return this.save(newUser)
  }
}
export default UserRepository
