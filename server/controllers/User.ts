import { getCustomRepository } from 'typeorm'
import { ContextBody, Context } from '../common/@types'
import UserRepository from '../services/User'

class User {
  static async find (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    const body: ContextBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }
  static async save (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.saveUser(ctx.request.query)
    const body: ContextBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }
  static async update (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.updateUser(ctx.request.query)
    const body: ContextBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }
}
export default User
