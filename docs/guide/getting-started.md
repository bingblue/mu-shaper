# 起步

::: tip 注意
:loudspeaker: 默认已安装好`Nodejs`
:::

## 安装

安装[koa][1]、[koa-joi-router][4]
```cmd
npm i koa koa-joi-router -S
```

安装[typescript][2]、[ts-node][3]，`ts-node`能使Nodejs直接运行TS代码
```cmd
npm i typescript ts-node -D
```

新建app.ts在server目录下

```js
'use strict'
import * as Koa from 'koa'
const app = new Koa()
app.listen(3000)
```

在`package.json`中加入
```json {3}
"scripts": {
  "start": "npm run dev",
  "dev": "ts-node server/app.ts",
},
// 运行npm start
// 现在，应用已经启动了！
```
让我们访问`localhost:3000`就能看到`Hello World`了，你离CEO的距离只差**99**个`Hello World`了，加油！

[1]:https://koajs.com/
[2]:http://www.typescriptlang.org/docs/home.html
[3]:https://github.com/TypeStrong/ts-node
[4]:https://github.com/koajs/joi-router
