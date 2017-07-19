## a project with vue,fis3
> 项目基于fis3,vue,vuex,vue-router搭建

## 目录结构介绍

### package.json
放置项目整体信息,依赖包,以及dev依赖包

### config.json
放置在build时需要合并生成libs.js的node_modules包名

### fis-conf.js
配置fis打包方式

### build.sh
agile编译所需脚本

### otp.sh
otp测试脚本目前用不到, 若进行otp测试只需运行命令:
```sh
npm run otp
```

### client

项目主目录结构,前端源码基本都放在里面:

1. index.html, 单页面入口
2. app.js,为index.html引用的入口文件
3. static目录,放置静态资源,一般是不需要打包处理的
4. runtimes目录,包含前端路由配置,store相关配置,以及整体组件App.vue(runtimes/pages/App.vue)
5. pages目录,放置各路由加载的页面组件
6. components, 放置公用的自定义组件,在UI库不满足需求的情况下自定义



## 构建流程

### install
clone项目后,根据package.json进行安装相关依赖

```sh
npm install

```
### run

#### development environment（开发环境）
开发环境基于fis3。需要提前全局安装fis3
- fis3全局安装
```sh
npm install -g fis3
```
- 开启fis3 本地服务
```sh
fis3 server start
```
- 查看 fis3 server里项目部署的目录
```
fis3 server open
```

- 开发模式下部署项目
```sh
npm run dev
```

#### otp(测试平台环境)
运行命令:
```sh
npm run otp
```
即可部署到otp测试平台,目前部署到otp环境: http://sqliang.baike.otp.baidu.com/page/createintro

#### prod (生产环境) 
运行命令:

```sh
npm run build
```
即可看到文件压缩合并到output目录下,然后根据build.sh相关shell脚本编译,测试


