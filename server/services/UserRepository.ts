import { EntityRepository, Repository } from 'typeorm'
import User from '../models/User'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByName (name: string): object {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }
}
export default UserRepository
