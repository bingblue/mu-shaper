export interface Config {
  /** 网站信息配置 */
  website: {
    /** 端口号 */
    port: number
    /** ssl证书.cert路径 */
    cert: any
    /** ssl证书.key路径 */
    key: any
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
    /** jwt配置 */
    jwt: {
      /** 密钥 */
      secret: string
      /** 有效期 */
      expiresIn: string
      /** 签发者网址 */
      issuer?: string
      /** 接收方网址 */
      audience?: string
    }
  }
}
