import koaSwagger from 'koa2-swagger-ui'
import { Context, Next } from '../@types'
import config from '../../config'

/**
 * swagger ui样式的接口文档
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const swagger = async (ctx: Context, next: Next): Promise<any> => {
  const { swagger } = config.website
  if (swagger) {
    return koaSwagger({
      title: 'API 文档',
      swaggerOptions: {
        url: '/doc/swagger.json'
      },
      routePrefix: '/doc/swagger'
      // oauthOptions: {}               // initOAuth
    })(ctx, next)
  } else {
    await next()
  }
}
export { swagger }
