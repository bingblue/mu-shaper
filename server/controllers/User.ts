import { Context } from "koa"
import { getCustomRepository } from 'typeorm'
import { UserRepository } from "../services/User"
import { CtxBody } from "../common/@types"

class User {
  constructor () {
  }
  async getByName (ctx: Context, next: Function) {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(ctx.request.query.name)
    const body: CtxBody = {
      code: 200,
      message: '成功',
      body: user
    }
    ctx.body = body
  }
}
export default User
