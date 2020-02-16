import bcrypt from 'bcryptjs'
import { ContextBody } from '../../@types'
/**
 * 工具方法
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-02-07
 */
const util = {
  /** sha256加密 */
  encode (password: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  },

  /**
   * 解密
   * @param rawPassword 真实密码
   * @param encodedPassword 加密后密码
   * @return 密码是否一致
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
   * @return body对象
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
