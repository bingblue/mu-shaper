import { getCustomRepository } from 'typeorm'
import { Context } from '../common/@types'
import { util } from '../common/util'
import UserRepository from '../services/User'

class User {
  static async find (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    ctx.body = util.getBody(user)
  }
  static async save (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.saveUser(ctx.request.body)
    ctx.body = util.getBody(user)
  }
  static async update (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.updateUser(ctx.request.query)
    ctx.body = util.getBody(user)
  }
}
export default User
