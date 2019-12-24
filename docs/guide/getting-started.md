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

新建app.ts在server目录下：
```ts
import * as Koa from 'koa'
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
import * as http2 from 'http2'
import * as Koa from 'koa'
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
```js
// 不建议在{}代码块内部声明变量或函数
"no-inner-declarations": "off",
// 不建议给变量动态赋await的值
"require-atomic-updates": "off",
// 不建议使用any类型
"@typescript-eslint/no-explicit-any": "off",
// 方法必须定义返回类型，这条规则还是打开着好
"@typescript-eslint/explicit-function-return-type": "error"
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
import * as Koa from 'koa'
import * as router from 'koa-joi-router'
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

最后运行`npm run test`，就能看到测试报告了，`jest`默认测试`**.spec.ts`、`**.test.ts`或`__tests__`文件下的文件。

## 使用typeorm
[typeorm][10]：最佳ORM框架，支持 MySQL、Postgres、SQLite、SQL Server、Oracle、MongoDB等。

[mysql2][12]：我们使用`mysql数据库`，NPM模块`mysql2`比模块`mysql`性能更好，支持的API更多。

[reflect-metadata][11]：为注解添加元数据，`typeorm`会用到。
```cmd
// 安装
npm i typeorm mysql2 reflect-metadata -S
```



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
```

[1]:https://koajs.com/
[2]:http://www.typescriptlang.org/docs/home.html
[3]:https://github.com/TypeStrong/ts-node
[4]:https://www.helplib.com/GitHub/article_116239
[5]:https://pm2.keymetrics.io/docs/usage/quick-start/
[6]:https://github.com/remy/nodemon#nodemon
[7]:https://standardjs.com/readme-zhcn.html
[8]:https://standardjs.com/index.html#typescript
[9]:https://jestjs.io/
[10]:https://github.com/typeorm/typeorm
[11]:https://github.com/rbuckton/reflect-metadata
[12]:https://github.com/sidorares/node-mysql2
