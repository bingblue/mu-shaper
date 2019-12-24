import { EntityRepository, Repository } from 'typeorm'
import { User } from '../models/User'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }
}
