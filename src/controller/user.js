const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryto');
const login = (username, password) => {
  username = escape(username)
  
  //生成加密密码
  password = genPassword(password);
  password = escape(password)
  //假数据
  // if (username === 'zhangsan' && password === '123') {
  //   return true
  // }
  // return false
  const sql = `
    select username, realname from users where username=${username} and password=${password}
  `;
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}