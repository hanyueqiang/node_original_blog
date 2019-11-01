
## 这是个什么的项目？

使用 Node.js + MySQL 开发一套个人博客server端。只供学习ndoejs原生写法，不推荐工作使用，摆脱使用框架后不知原理，真正达到知其然，知其所以然。

## 项目的亮点
- nodemon 修改文件自动重启
- nodejs连接mysql, 如何执行sql语句
- 根据NODE_ENV区分配置
- 封装exec函数，api使用exec操作数据库
- nodejs连接redis

## 如何使用和学习？

### 数据库
启动项目前一定要在创建好 `myblog1` 数据库。
```
# 登录数据库
$ mysql -uroot -p密码

```

### 克隆项目

```

# 克隆项目代码
$ git clone https://github.com/hanyueqiang/node_original_blog.git

# 进入项目根目录
$ cd node_original_blog

# 安装包
$ npm install

# 运行服务
$ npm run dev

# 打开浏览器输入回车：http://localhost:8000

```

