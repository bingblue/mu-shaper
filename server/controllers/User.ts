import { getCustomRepository } from 'typeorm'
import { ContextBody, Context } from '../common/@types'
import UserRepository from '../services/UserRepository'

class User {
  static async getByName (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    const body: ContextBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }

  static async getByName2 (ctx: Context): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    const body: ContextBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }
}
export default User
