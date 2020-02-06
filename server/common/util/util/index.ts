import { createHash } from 'crypto'
import bcrypt from 'bcryptjs'
import { ContextBody } from '../../@types'
const util = {
  /** MD5加密 */
  md5 (password: string): string {
    return createHash('md5').update(password + '').digest('hex')
  },

  /** sha256加密 */
  encode (password: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  },

  /**
   * 解密
   * @param rawPassword 真实密码
   * @param encodedPassword 加密后密码
   * @updateAt 2019-02-05
   */
  matches (rawPassword: string, encodedPassword: string): boolean {
    let salt = encodedPassword.substr(0, 29)
    let newPassword = bcrypt.hashSync(rawPassword, salt)
    return newPassword === encodedPassword
  },

  /**
   * Koa返回的响应体格式
   * @param body 返回内容
   * @param msg 返回消息
   * @param code 成功返回200，错误返回其他
   * @updateAt 2019-01-12
   */
  getBody (body: any = {}, msg = 'success', code = 200): ContextBody {
    return {
      code,
      message: msg,
      body
    }
  }
}
export { util }
