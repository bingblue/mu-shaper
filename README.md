<div align="center">
  <a href="http://www.bingblue.com">
    <img width="112" heigth="112" src="https://github.com/bingblue/group/blob/master/public/img/logo-b-square.png">
  </a>
  <br>
  <br>
	<a href="https://standardjs.com">
		<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
	</a>
  <a href="https://github.com/stylelint/stylelint">
		<img src="https://img.shields.io/badge/css%20style-stylelint-brightgreen.svg">
	</a>
  <a href="https://jq.qq.com/?_wv=1027&k=5tyQDAd">
		<img src="https://img.shields.io/badge/QQ%20Group-215259343-blue.svg">
	</a>
  <h1>mu-shaper</h1>
  <p>
    Node.js开发脚手架，快速开发，一站式开发，轻量级，更简洁的Node模块化模板
  <p>
  <br>
  <br>
</div>

## 基本信息

**QQ群** ：[215259343][11]

**官网** ： www.bingblue.com

## Usage

```console
    # Npm install(安装依赖)
    $ cd project && npm i

    # Run the project(运行项目)
    $ npm start
```
## Mu-Shaper 技术选型（所有技术&需求）
- koa2
- Typescript
- 数据库
  - pgsql
  - mongodb
  - mysql      ⭐
- ORM框架
  - typeorm    ⭐
  - sequelize 
  - mongoose  
- 模板引擎
  - not use    ⭐
  - pug       
  - ejs       
- JWT
- redis
- http2/https
- ipv6
- pm2
- axios
- 微信功能（v2）
- 邮件/短信（v2）
- oss对象存储服务
  - aliyun     ⭐
  - qiniu    
- 权限RBAC
- Docker（v2）
- 持续集成（v2）
  - jenkins               ⭐
  - github actions 
- 解析请求中间件
  - koa-bodyparser
  - koa-better-body       ⭐
  - [更多][26]
- [其他中间件][27]
  - koa-joi-router        ⭐
  - koa-joi-router-docs   ⭐
  - koa-joi-swagger
  - koa-oai-router
  - koa-better-serve
  - koa-server-push [http2，以后可用][28]
  - koa-helmet  [系统安全，以后可用][29]
  - koa-passport          ⭐
  - [passport-jwt][30]    ⭐
  - JWT                   
  - 其他第三方登录         
  - koa-session-redis3    ⭐
  - koa-error             ⭐
  - koa-logger            ⭐
- 测试框架
  - jest                  ⭐
  - ava    
- 支付系统（v2）
  - ali pay               ⭐  
  - wechat pay
- 微系统（v3）
  - 微服务
  - 微前端
- 自动生成代码（v2）
- 自动生成API文档（koa-joi-router-docs）（v2）
- 可自定义功能（v2）
- GraphQL prisma 2.0（v4）
- 聊天系统 websocket（v3）
- 博客系统（v3）
  - markdown编辑器

## Mu-Shaper v1.0 TODO List
- [X] Koa2
- [X] 目录定义
- [X] Typescript
- [X] [JavaScript Standard 代码风格][31]
- [ ] Log->装饰器
- [ ] 装饰器->工厂模式->处理try catch
- [ ] mysql
- [ ] typeorm
- 中间件
  - [ ] koa-better-body
  - [ ] koa-joi-router
  - [ ] koa-error
  - [ ] koa-logger
- [ ] http2/https
- [ ] ipv6
- [ ] pm2
- [ ] jest
- [ ] koa-passport
- [ ] passport-jwt
- [ ] redis
- [ ] koa-session-redis3
- [ ] axios
- [ ] 权限RBAC
- [ ] oss-aliyun


## Mu-Shaper 涉及技术 (⭐: `表示已完成`)

- [X] [Koa2][1]           -   下一代 Node.js web 框架 [中文文档][16]
- [ ] [pug][2]            -   模板引擎(原名:Jade)
- [ ] [MongoDB][3]        -   基于分布式文件存储的NOSQL数据库 [教程][17]
- [ ] [mongoose][18]      -   ODM框架，对象文档映射
- [ ] [ES6][4]            -   ES6语法，如：async/await
- [ ] [passport][5]       -   第三方登录: [github][15]/[QQ][19]/[WeChat][20]/[Weibo][21]
- [ ] [JWT][6]            -   JSON Web Tokens 鉴权
- [ ] [redis][7]          -   NOSQL数据库,做缓存
- [ ] [nginx][8]          -   HTTP和反向代理服务器
- [ ] [https/ssl][9]      -   [阿里云][22]/[七牛云][23]
- [ ] [http2][24]         -   新http协议
- [ ] [PM2][10]           -   高级的Node.js的生产流程管理器
- [ ] [axios][14]         -   Promise的http请求
- [ ] [qiniu][12]         -   对象存储/CDN
- [ ] [SMS][13]           -   阿里云的短信服务
- [ ] [nodemailer][25]         -   邮件模块

## Mu-Shaper 成员列表

- XiaoMuCOOL
- 梦游
## License

**Mu-Shaper** is licensed under the MTI LICENSE. [View the license file](https://github.com/bingblue/mu-shaper/blob/master/LICENSE)

Copyright © 2019 · 滨清科技 , Inc. 


[1]:http://koajs.com/
[2]:https://pugjs.org/api/getting-started.html
[3]:https://www.mongodb.com/
[4]:http://es6.ruanyifeng.com/
[5]:http://www.passportjs.org/
[6]:https://github.com/koajs/jwt
[7]:https://redis.io/
[8]:nginx.org
[9]:https://segmentfault.com/a/1190000007888088
[10]:http://pm2.keymetrics.io/
[11]:https://jq.qq.com/?_wv=1027&k=5tyQDAd
[12]:https://www.qiniu.com/
[13]:https://www.aliyun.com/product/sms?spm=5176.8142029.388261.361.KwWin2
[14]:https://github.com/axios/axios
[15]:https://github.com/cfsghost/passport-github
[16]:https://github.com/guo-yu/koa-guide
[17]:http://www.runoob.com/mongodb/mongodb-tutorial.html
[18]:http://mongoosejs.com/
[19]:https://github.com/qdsang/passport-qq
[20]:https://github.com/Treri/passport-weixin
[21]:https://github.com/xinbenlv/passport-weibo
[22]:https://common-buy.aliyun.com/?spm=5176.100239.blogcont65199.23.sIUfy0&commodityCode=cas#/buy
[23]:https://portal.qiniu.com/certificate/apply
[24]:https://segmentfault.com/a/1190000002765886
[25]:https://nodemailer.com/about/
[26]:https://github.com/koajs/koa/wiki#body-parsing
[27]:https://github.com/koajs/koa/wiki
[28]:https://www.npmjs.com/package/koa-server-push
[29]:https://github.com/venables/koa-helmet
[30]:https://github.com/themikenicholson/passport-jwt
[31]:https://standardjs.com/readme-zhcn.html
