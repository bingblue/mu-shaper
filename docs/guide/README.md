# 安装环境
:::danger 危险
:cry:此教程写于2015年前后，环境如有更新，请看官网教程！
:::
## 环境列表
1. **[git](#安装-git)** 
2. **[nodejs](#安装-nodejs)**
3. ~~**[mongodb](#安装-mongodb)**~~
4. ~~**[express](#安装-express)**~~

## 安装 git
 git 下载地址：http://git-scm.com/downloads/ 

下载好 git ，直接安装，一路 next 就可以了，我修改了 **默认安装路径** 和 **Windows Explorer integration** 。

安装好后，右键会有 **Git Bash Here** ，点击它，在bash里设置下 全局设置，**name** 和 **email** ： 

    $ git config --global user.name "Your Name"
    $ git config --global user.email "email@example.com"

为了要和 **github** 连接，要新建一个 SSH ，在bash里 打如下命令：

    $ ssh-keygen -t rsa -C "email@example.com"

回车后会让你选择 安装路径 和 密码，直接默认，一路回车就可以了。

 SSH 默认放在 当前用户的 `.ssh` 文件夹下，打开 **id_rsa.pub** 文件，复制里面的key。

回到 github ，进入 **Account Settings** ，左边选择 **SSH Keys** ，**Add SSH Key** ， title 随便填，粘贴 key 。为了验证是否成功，在bash下输入：

    $ ssh -T git@github.com

回车会提示是否continue，输入yes就会看到：You’ve successfully authenticated, but GitHub does not provide shell access 。这就表示已成功连上github。

接下来，**clone** 项目到本地，你可以先 **fork** 项目，也可以请求我邀请你加入项目 Team ，然后 在bash下输入：

    $ git clone git@github.com:bingblue/group.git

回车后自动下载项目到本地，并自动初始化仓库，我修改了README文件后，准备 **push** 到 github 上。

1. 将改动的地方添加到版本管理器：

        $ git add .


2. 提交到本地的版本控制库里，引号里面是你对本次提交的说明信息

        $ git commit -m "XXXXXX"


3. 将本地的仓库提交到你的github上

        $ git push -u origin master


现在，已经完成了所有关于 git 的 **安装** 、 **pull** 和 **push** 。

### 附：git常用命令
```shell
git push origin master //把本地源码库push到Github上
git pull origin master //从Github上pull到本地源码库
git config --list //查看配置信息
git status //查看项目状态信息
git branch //查看项目分支
git checkout -b host//添加一个名为host的分支
git checkout master //切换到主干
git merge host //合并分支host到主干
git branch -d host //删除分支host
git reset --hard commit_id //回退到哪个版本 HEAD是当前，上一个 是HEAD^
git log //查看提交历史
git reflog //查看命令历史
git checkout -- test.txt //还原成 仓库中的文件
```

**Tips：** 多使用TAG标签，能提高效率。

**Git 学习网站：** http://www.liaoxuefeng.com/ 里的Git教程


## 安装 nodejs
 nodejs 下载地址：http://www.nodejs.org/download/

下载好 nodejs ，直接安装，还是一路 next 就可以了，我修改了 默认安装路径 。安装好后配置下环境变量：

    PATH：C:\Program Files\nodejs
    NODE_PATH ：C:\Program Files\nodejs\node_modules

然后再控制台输入：

    node -v

显示 `v.xx.xx.xx` 即安装成功！

### nodejs 入门
使用 **nodejs** 搭建本地 **HTTP** 服务非常简单，让我们开始吧，新建文件 `test.js`,并输入内容：

    var http = require("http"); 

    http.createServer(function(request, response) { 

      response.writeHead(200, {"Content-Type": "text/plain"}); 

      response.write("Hello World."); 

      response.end(); 

    }).listen(3000); 

    console.log("nodejs start listen 3000 port!");

然后在控制台 `cd` 到 `test.js` 文件目录下

    cd c:\workspace\bingblue\group

在输入：

    node test.js

显示 **nodejs start listen 3000 port!** 就成功启动服务了，到浏览器输入 **localhost:3000** 就能看到 **Hello World.** 了，至此，nodejs 入门已经完成了。

**Nodejs 学习网站：** https://github.com/nswbmw/N-blog/wiki


## 安装 mongodb

 mongodb 下载地址：http://www.mongodb.org/downloads

建议下载 **ZIP** 文件，下载好后解压到你要放的目录下，我是这么配置的：
- 解压安装包到 D:\MongoDB
- 建立数据库目录 D:\MongoDB\data
- 建立日志目录 D:\MongoDB\logs
- 建立配置文件目录 D:\MongoDB\etc
- 建立配置文件 D:\MongoDB\etc\mongodb.conf

设置 **mongodb.conf** 文件内容为：

    dbpath=D:\MongoDB\data #数据库路径
    logpath=D:\MongoDB\logs\mongodb.log #日志输出文件路径
    logappend=true #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
    journal=true #启用日志文件，默认启用
    quiet=true #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
    port=27017 #端口号 默认为27017

配置文件和相关目录建好后使用如下方式启动MongoDB：

1. 普通启动

        mongod --config D:\MongoDB\etc\mongodb.conf
        //要先 cd 到 D:\MongoDB\bin 目录下

2. 使用SC安装为Windows服务（未测试过）

        sc create MongoDB binPath= "D:\MongoDB\bin\mongod.exe --service --config=D:\MongoDB\etc\mongodb.conf"
        //然后在控制台 net start MongoDB


我是用的普通启动，然后再浏览器中输入 `localhost:27017` 看到提示 **It looks like you are trying to access MongoDB over HTTP on the native driver port.** 即启动成功。 

**MongoDB 学习网站：** http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html


## 安装 express
 npm 官方网站：https://www.npmjs.org/

 express 官方网站：http://expressjs.com/

安装 **nodejs** 时已经自动安装了 **npm** ,所以直接打开控制台，输入：

    npm install -g express && npm install -g express-generator

回车会自动安装 **express** ，然后 输入：

    express -V

回车显示 `x.x.x` 即安装成功。

### 新建项目
打开控制台 `cd` 到项目父级文件夹下，输入：

    express -e group

新建一个 **ejs** 模板的名为 **group** 的项目，然后根据提示，输入：

    cd group && npm install

进入 **group** 目录，并安装依赖插件。安装完成后输入：

    node bin\www

就可以启动服务了，然后到浏览器输入 **localhost:3000** 就能看到 **Welcome to Express** ，就这样 express 新建项目完成了。

**至此，第一章 搭建环境 就已经介绍完了，是不是很简单，让我们开启 nodejs 的奇妙之旅吧！**