import { EntityRepository, Repository, getCustomRepository } from 'typeorm'
import { User } from '../models/User'

@EntityRepository()
export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany()
  }
}
// const userRepository = getCustomRepository(UserRepository)
// const timber = await userRepository.findByName("Timber")
