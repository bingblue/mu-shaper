export interface Config {
  /** 网站信息配置 */
  website: {
    /** 端口号 */
    port: number
    /** ssl证书.cert路径 */
    cert: any
    /** ssl证书.key路径 */
    key: any
    /** 生成API文档 */
    swagger: boolean
  }
  /** 数据库配置 */
  db: {
    /** mysql数据库配置 */
    mysql: {
      host: string
      port: number
      username: string
      password: string
      database: string
    }
  }
  /** 鉴权配置 */
  auth: {
    /** 不需要权限验证的路由 */
    ignorePath: Array<string>
    /** jwt配置 */
    jwt: {
      /** 密钥 */
      secretOrKey: string
      /** 有效期 */
      expiresIn: string
      /** 签发者网址 */
      issuer?: string
      /** 接收方网址 */
      audience?: string
    }
  }
}
