import koaSwagger from 'koa2-swagger-ui'
import { Context, Next } from '../@types'
import config from '../../config'

const swagger = async (ctx: Context, next: Next): Promise<any> => {
  const { swagger } = config.website
  if (swagger) {
    return koaSwagger({
      title: 'API 文档', // page title
      // oauthOptions: {},               // passed to initOAuth
      swaggerOptions: { // passed to SwaggerUi()
        // dom_id: 'swagger-ui-container',
        url: '/doc/swagger.json' // link to swagger.json
        // supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        // docExpansion: 'none',
        // jsonEditor: false,
        // defaultModelRendering: 'schema',
        // showRequestHeaders: false,
      },
      routePrefix: '/doc/swagger' // route where the view is returned
      // hideTopbar: false,               // hide swagger top bar
      // favicon16: '/favicon-16x16.png', // default icon 16x16, set for self icon
      // favicon32: '/favicon-32x32.png', // default icon 32x32, set for self icon
    })(ctx, next)
  } else {
    await next()
  }
}
export { swagger }
