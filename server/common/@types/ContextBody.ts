export interface ContextBody {
  /** 响应码：成功200，其他都是失败 */
  code: number
  /** 成功/失败消息 */
  message: string
  /** 响应体：具体数据 */
  body: any
}
