import { createHash } from 'crypto'
import { ContextBody } from '../../@types'
const util = {
  /** MD5加密 */
  md5 (password: string): string {
    return createHash('md5').update(password + '').digest('hex')
  },

  /**
   * Koa返回的响应体格式
   * @param body 返回内容
   * @param msg 返回消息
   * @param code 成功返回200，错误返回其他
   * @author 小牧COOL <xiaomucool@bingblue.com>
   * @updateAt 2019-01-12
   */
  getBody (body: any = {}, msg = 'success', code = 200): ContextBody {
    const result = {
      code: code,
      message: msg,
      body: body
    }
    return result
  }
}
export { util }
