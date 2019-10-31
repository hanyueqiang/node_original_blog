const env = process.env.NODE_ENV; // 环境参数

// 配置
let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog1'
  }
} else {
  // env === 'production'
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog1'
  }
}

module.exports = {
  MYSQL_CONF
}
