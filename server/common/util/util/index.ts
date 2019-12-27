import { createHash } from 'crypto'
import { ContextBody } from '../../@types'
const util = {
  md5 (password: string): string {
    return createHash('md5').update(password + '').digest('hex')
  },
  getBody (body: any = {}, msg: string = 'success', code: number = 200): ContextBody {
    const result = {
      code: code,
      message: msg,
      body: body
    }
    return result
  }
}
export { util }
