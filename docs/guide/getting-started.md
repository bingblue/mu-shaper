# 起步

::: tip 注意
:loudspeaker: 默认已安装好`Nodejs`
:::

## 使用koa

安装[koa][1]：
```cmd
npm i koa -S
```

安装[typescript][2]、[ts-node][3]，`ts-node`能使Nodejs直接运行TS代码。
```cmd
npm i typescript ts-node -D
```

配置`tsconfig.json`文件：
```json{9}
{
  "compileOnSave": false,
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2017",
    "moduleResolution": "node",
    "noImplicitAny": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "preserveConstEnums": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": true,
    "importHelpers": true,
    "rootDir": "./",
    "outDir": "./dist",
    "lib": ["es6", "dom", "es7"]
  },
  "exclude": ["node_modules", "public"],
  "files": ["./server/app.ts"]
}
```

新建app.ts在server目录下：
```ts
import Koa from 'koa'
const app = new Koa()
app.use(async ctx => {
  ctx.body = 'Hello World'
})
app.listen(3000)
```

在`package.json`中加入：
```json {3}
"scripts": {
  "start": "npm run dev",
  "dev": "ts-node server/app.ts"
},
// 运行npm start
// 现在，应用已经启动了！
```

让我们访问`localhost:3000`就能看到`Hello World`了，你距离CEO只差**99**个`Hello World`了，加油！

## 使用http2

```ts
import http2 from 'http2'
import Koa from 'koa'
const app = new Koa()
// 启动服务
const server = http2.createSecureServer({
  cert: cert,
  key: key
}, app.callback())
server.listen(3000, () => {
  console.log(`服务已启动!`)
})
```

访问`https://localhost:3000`就能看到了~`cert`和`key`需要自己申请下`SSL证书`。

## 使用IPV6

```ts
import http from 'http'
import Koa from 'koa'
const app = new Koa()
app.use(async ctx => {
  ctx.body = 'Hello World'
})
const server = http.createServer(app.callback())
server.listen(3001, '::', () => {
  console.log('服务已启动~')
})

```

访问`http://[::1]:3001/`就能看到`Hello World`了~`IPV6`程序里支持很简单，主要是整个链路的支持，包括硬件，服务商等,缺一不可。

### IPV6格式说明

**前导零压缩法：** 将每一段的前导零省略，但是每一段都至少应该有一个数字。
```cmd
// 原地址
2000:0000:0000:0000:0001:2345:6789:abcd
// 压缩地址
2000:0:0:0:1:2345:6789:abcd
```

**双冒号法：** 如果几个连续的段值都是0，那么这些0可以简记为::。每个地址中只能有一个::。
```cmd
// 原地址
2000:0000:0000:0000:0001:2345:6789:abcd
// 压缩地址
2000::1:2345:6789:abcd
```

**回环地址：** `::1`，相当于IPv4的回环地址`127.0.0.1`。


## 使用nodemon

[nodemon][6]：热加载插件，修改文件自动重启。
```cmd
// 安装nodemon
npm i nodemon -D
```

在`package.json`中修改：
```json {3}
"scripts": {
  "start": "npm run dev",
  "dev": "nodemon -e ts,tsx,json --exec ts-node ./server/app.ts"
},
// 运行 npm start
```

## 使用VSCode调试
按`F5`调出配置文件`.vscode\launch.json`,修改：
```json
{
  "name": "运行Mu-Shaper",
  "type": "node",
  "request": "launch",
  "args": [
    "${workspaceRoot}/server/app.ts" // 入口文件
  ],
  "runtimeArgs": [
    "--nolazy",
    "-r",
    "ts-node/register"
  ],
  "sourceMaps": true,
  "cwd": "${workspaceRoot}",
  "protocol": "inspector",
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
},
{
  "name": "运行当前文件",
  "type": "node",
  "request": "launch",
  "args": [
    "${relativeFile}" // 调试当前文件
  ],
  "runtimeArgs": [
    "--nolazy",
    "-r",
    "ts-node/register"
  ],
  "sourceMaps": true,
  "cwd": "${workspaceRoot}",
  "protocol": "inspector",
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
// 再按F5就可以调试了，可设置断点
```

## 使用Standard Style
[JavaScript Standard Style][7]：代码风格，主要规则有使用两个空格、字符串使用单引号、无分号等。
`standard`配合`typescript`有BUG，所以安装`standardx`，见[详情][8]。
```cmd
npm i standardx @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

修改其中规则：
```json{9,11,13}
"eslintConfig": {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // 不建议在{}代码块内部声明变量或函数
    "no-inner-declarations": "off",
    // 不建议给变量动态赋await的值
    "require-atomic-updates": "off",
    // 不建议使用any类型
    "@typescript-eslint/no-explicit-any": "off",
    // 方法必须定义返回类型，这条规则还是打开着好
    "@typescript-eslint/explicit-function-return-type": "error"
  }
}
```

在`package.json`中添加：
```json {4}
"scripts": {
  "start": "npm run dev",
  "dev": "nodemon -e ts,tsx,json --exec ts-node ./server/app.ts",
  "lint": "standardx --fix --parser @typescript-eslint/parser --plugin @typescript-eslint/eslint-plugin **/*.ts"
},
// 运行 npm run lint
```

## 使用joi-router
[koa-joi-router][4]：基于`koa-router`、`joi`的路由，自带参数验证功能、请求体解析功能，配合`koa-joi-router-docs`可实现swagger文档功能。
```cmd
npm i koa-joi-router -S
```

例子：
```ts {18}
import Koa from 'koa'
import router from 'koa-joi-router'
const Joi = router.Joi
const admin = router()
// 基础请求
admin.get('/', async (ctx) => {
  ctx.body = 'hello world!'
})
// 带验证的请求
routers.route({
  method: 'post',
  path: '/signup',
  validate: {
    body: {
      email: Joi.string().lowercase().email().required()
    },
    // 可选值有：form、json、multipart，GET请求不需要设置
    type: 'json',
    // 出参也可以校验
    output: {
      200: {
        body: {
          userId: Joi.string().required(),
          email: Joi.string().lowercase().email().required()
        }
      }
    }
  },
  handler: async (ctx) => {
    ctx.body = {
      userId: '1001',
      email: ctx.request.body.email
    }
    // 如果请求为'GET'，validate验证对象为'query'：
    // 获取参数：ctx.request.query

    // 如果请求为'POST'，validate验证对象为'body'，validate.type为'json'、'form'：
    // 获取参数：ctx.request.body

    // 如果请求为'POST'，validate.type为'multipart'：
    // 获取参数：ctx.request.parts.field.name

    // 如果路由为'/user/:id'：
    // 获取id：ctx.request.params.id
  }
})
// 
app.use(admin.middleware())
app.listen(3000)
```

**`Tips`：`GET`请求一定不要设置`validate.type`，血和泪的教训。**

## 使用koa-joi-router-docs
[koa-joi-router-docs][18]：配合`koa-joi-router`可生成Swagger 2.0 JSON定义。

[koa2-swagger-ui][19]：根据`swagger.json`生成Swagger UI页面。
```cmd
// 安装
npm i koa-joi-router-docs koa2-swagger-ui -D
```

修改`route/index.ts`：
```ts
import router from 'koa-joi-router'
import { SwaggerAPI } from 'koa-joi-router-docs'
const route = router()
const { Joi } = Router

route.get('/user/:_id', {
  meta: {
    swagger: {
      summary: '用户信息',
      description: `描述`,
      tags: ['user']
    }
  },
  validate: {
    params: {
      _id: Joi.string().alphanum().max(24).example('abcdefg').description('用户ID').required()
    },
    output: {
      '200-299': {
        body: Joi.object({
          userId: Joi.string().description('用户ID')
        }).options({
          allowUnknown: true
        }).description('User')
      },
      500: {
        body: Joi.object({
          message: Joi.string().description('错误信息')
        }).description('error')
      }
    }
  },
  handler: async ctx => {
    ctx.body = {
      userId: ctx.params._id
    }
  }
})
// 创建SwaggerAPI实例
const generator = new SwaggerAPI()
// 从路由器的.routes属性中提取路由定义
generator.addJoiRouter(router)
// Swagger规范的全局描述
const spec = generator.generateSpec({
  info: {
    title: 'Mu-shaper API',
    description: '描述。',
    version: '0.0.1'
  },
  basePath: '/',
  tags: [{
    name: 'user',
    description: `用户模块`
  }],
}, { 
  // 自定义默认响应
  defaultResponses: {
    200: {
      description: 'OK'
    },
    500: {
      description: 'ERROR'
    }
  }
})

// 生成Swagger JSON定义
router.get('/doc/swagger.json', async ctx => {
  ctx.body = JSON.stringify(spec, null, '  ')
})

// 生成reDoc接口文档
router.get('/doc', async ctx => {
  ctx.body = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example API</title>
  </head>
  <body>
    <redoc spec-url='/doc/swagger.json' lazy-rendering></redoc>
    <script src="https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js"></script>
  </body>
  </html>
  `
})

export default route.middleware()
```

在`app.ts`里引用下，访问`localhost:port/doc`就能看到`reDoc`风格的接口文档了，但是我们想要`Swagger UI`风格的文档：
```ts
// app.ts 
import koaSwagger from 'koa2-swagger-ui'
app.use(koaSwagger({
  title: 'API 文档',
  swaggerOptions: {
    url: '/doc/swagger.json'
  },
  routePrefix: '/doc/swagger',
}))
```

访问`localhost:port/doc/swagger`就能看到`Swagger UI`风格的接口文档了，完美！

## 使用typeorm
[typeorm][10]：最佳ORM框架，支持 MySQL、Postgres、SQLite、SQL Server、Oracle、MongoDB等。

[mysql2][12]：我们使用`mysql数据库`，NPM模块`mysql2`比模块`mysql`性能更好，支持的API更多。

[reflect-metadata][11]：为注解添加元数据，`typeorm`会用到。
```cmd
// 安装
npm i typeorm mysql2 reflect-metadata -S
```

创建`models`文件夹：
```ts
// models/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number
}
```
操作数据库：
```ts
// app.ts
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './moderls/User'
createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [User],
  synchronize: true
}).then(async connection => {
  const user = new User()
  user.name = 'Alice'
  user.age = 25
  let userRepository = connection.getRepository(User)
  await userRepository.save(user)
  console.log('保存用户成功！')
}).catch(error => console.log(error))
```

## 使用passport
[koa-passport][13]：`nodeJs`的身份验证中间件,支持用户名密码、github、google等你所有能想到的登录方式。[官网][14]

[passport-local][15]：`passport`的普通登录策略。

[passport-jwt][16]：`passport`的`jwt`验证策略。

[jsonwebtoken][17]：`jwt`生成。
```cmd
// 安装
npm i koa-passport passport-local passport-jwt jsonwebtoken -S
```

新建`possport.ts`，添加策略：
```ts
import JWT from 'jsonwebtoken'
import passport from 'koa-passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// 创建JWT
function createJWT(id: string): string {
  const { secretOrKey, ...opts } = config.auth.jwt
  return JWT.sign({ id }, secretOrKey, opts)
}

// 普通登录策略
passport.use(new LocalStrategy(async (username, password, done) => {
  // 登录逻辑
  const user = await User.find(username)
  user.token = createJWT(user.id)
  return done(null, user)
}))

// jwt策略
let jwtOpt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme(),
  secretOrKey: 'secret'
}
passport.use(new JwtStrategy(jwtOpt, async (jwt_payload, done) => {
  const user = await User.find(jwt_payload.id)
  return done(null, user || false)
}))

export { passport }
```

然后修改路由`route/auth/index.ts`：
```ts
// ... 引入略
route.route({
  method: 'post',
  path: '/login',
  validate: {
    type: 'json',
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },
  handler: async (ctx, next) => {
    return passport.authenticate('local', { session: false }, (err, user) => {
      ctx.body = user
    })(ctx, next)
  }
})

route.get('/info', passport.authenticate('jwt', { session: false }), async (ctx) => {
  // 登录成功后的用户信息在 ctx.req.user
  ctx.body = ctx.req.user
})
```

在`app.ts`中增加:
```ts
// ...引入略
import { passport } from './common/middleware/passport'
// 让passport把解析好的用户信息放入 ctx.req.user
app.use(passport.initialize())
```

运行后就能看到效果了~

## 使用Redis
[ioredis][25]：`Redis`的`Nodejs`客户端。
```cmd
// 安装
npm i ioredis -S
```

在redis.ts里面添加代码：
```ts
import Redis from 'ioredis'
// const redis = new Redis() // 默认: 127.0.0.1:6379
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
  password: "password"
})

redis.set("foo", "bar")
redis.get("foo").then(function(result) {
  console.log(result)
})
redis.del("foo")
```

`Redis`使用很简单，性能又好，还有订阅/发布模式，可以查看官方文档。

## 提升网站安全性
参考[Web Application Security Testing Cheat Sheet][21]，主要用到以下插件：

[koa-helmet][20]：设置一些安全性相关的HTTP头。

[koa2-cors][22]：解决跨域问题和减少复杂请求的预检请求`OPTIONS请求`。

[koa-compress][23]：Gzip压缩。

[koa-ratelimit][24]：限制用户的连接频率来防止暴力破解。
```cmd
// 安装
npm i koa-helmet koa2-cors koa-compress -S
```

在`app.ts`里增加：
```ts
// 其他略
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
import ratelimit from 'koa-ratelimit'

// 跨域
app.use(cors({
  // Access-Control-Max-Age，减少复杂请求的预检请求[OPTIONS请求]
  maxAge: 864000 // 10天
}))
// 设置http头
app.use(helmet())
// gzip压缩
app.use(compress())
// 限流
app.use(ratelimit({
  driver: 'redis',
  db: new Redis(), // 需要引入redis
  duration: 60000, // 限制时间，毫秒
  errorMessage: '您尝试次数过多',
  id: (ctx) => ctx.ip,
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  max: 10,         // 限制时间里最多访问次数
  disableHeader: false,
  whitelist: (ctx) => {
    // 白名单，返回true/false
  },
  blacklist: (ctx) => {
    // 黑名单，返回true/false
  }
}))

```

## 使用jest
[jest][9]：Facebook旗下的测试框架。
```cmd
// 安装jest
npm i jest -D
// 配合typescript使用，需要用到ts-jest
npm i ts-jest -D
```

然后修改下`package.json`：
```json{5}
"scripts": {
  "start": "npm run dev",
  "dev": "nodemon -e ts --exec ts-node ./server/app.ts",
  "lint": "standardx --fix **/*.ts",
  "test": "jest --coverage --preset ts-jest"
}
```

新建`sum.spec.ts`
```ts
test('测试加法', () => {
  expect(1+1).toBe(2)
})
```

最后运行`npm run test`，就能看到测试报告了，`jest`默认测试`**.spec.ts`、`**.test.ts`或`__tests__`文件下的文件。

## 使用pm2
[pm2][5]：生产环境自动重启的插件，很强大。
```cmd
// 安装pm2
npm i pm2 -S
// 安装PM2的TS环境
npx pm2 install typescript
// 启动服务
pm2 start server/app.ts --watch
```

## 参考
```markdown
[1]:https://koajs.com/
[2]:http://www.typescriptlang.org/docs/home.html
[3]:https://github.com/TypeStrong/ts-node
[4]:https://github.com/koajs/joi-router
[5]:https://pm2.keymetrics.io/docs/usage/quick-start/
[6]:https://github.com/remy/nodemon#nodemon
[7]:https://standardjs.com
[8]:https://standardjs.com/index.html#typescript
[9]:https://jestjs.io/
[10]:https://github.com/typeorm/typeorm
[11]:https://github.com/rbuckton/reflect-metadata
[12]:https://github.com/sidorares/node-mysql2
[13]:https://github.com/rkusa/koa-passport
[14]:http://www.passportjs.org/
[15]:https://github.com/jaredhanson/passport-local
[16]:https://github.com/mikenicholson/passport-jwt
[17]:https://github.com/auth0/node-jsonwebtoken
[18]:https://github.com/chuyik/koa-joi-router-docs
[19]:https://github.com/scttcper/koa2-swagger-ui
[20]:https://github.com/venables/koa-helmet
[21]:https://segmentfault.com/a/1190000003860400
[22]:https://github.com/zadzbw/koa2-cors
[23]:https://github.com/koajs/compress
[24]:https://github.com/koajs/ratelimit
[25]:https://github.com/luin/ioredis
```

[1]:https://koajs.com/
[2]:http://www.typescriptlang.org/docs/home.html
[3]:https://github.com/TypeStrong/ts-node
[4]:https://github.com/koajs/joi-router
[5]:https://pm2.keymetrics.io/docs/usage/quick-start/
[6]:https://github.com/remy/nodemon#nodemon
[7]:https://standardjs.com/readme-zhcn.html
[8]:https://standardjs.com/index.html#typescript
[9]:https://jestjs.io/
[10]:https://github.com/typeorm/typeorm
[11]:https://github.com/rbuckton/reflect-metadata
[12]:https://github.com/sidorares/node-mysql2
[13]:https://github.com/rkusa/koa-passport
[14]:http://www.passportjs.org/
[15]:https://github.com/jaredhanson/passport-local
[16]:https://github.com/mikenicholson/passport-jwt
[17]:https://github.com/auth0/node-jsonwebtoken
[18]:https://github.com/chuyik/koa-joi-router-docs
[19]:https://github.com/scttcper/koa2-swagger-ui
[20]:https://github.com/venables/koa-helmet
[21]:https://segmentfault.com/a/1190000003860400
[22]:https://github.com/zadzbw/koa2-cors
[23]:https://github.com/koajs/compress
[24]:https://github.com/koajs/ratelimit
[25]:https://github.com/luin/ioredis
