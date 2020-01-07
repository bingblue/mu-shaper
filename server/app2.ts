import * as Koa from 'koa'
import koaSwagger from 'koa2-swagger-ui'
const app = new Koa()
app.use(koaSwagger({
  routePrefix: '/swagger',
  swaggerOptions: {
    url: 'http://petstore.swagger.io/v2/swagger.json'
  }
}))
app.listen(3000)