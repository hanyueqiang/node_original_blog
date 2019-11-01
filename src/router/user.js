const { login } = require('../controller/user');
const { set, get } = require('../db/redis');
const { SuccessModel, ErrorModel } = require('../model/resModel');

//获取cookie过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  console.log('d.toGMTString()', d.toGMTString())
  return d.toGMTString();
}

const handleUserRouter = (req, res) => {
  const method = req.method; //get post
  // const url = req.url;
  // const path = url.split('?')[0];
  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    //const { username, password } = req.query;
    const result = login(username, password);
    return result.then(data => {
      if (data.username) {
        //设置 session
        req.session.username = data.username;
        req.session.realname = data.realname;
        // 同步redis
        set(req.sessionId, req.session)
        return new SuccessModel();
      }
      return new ErrorModel('登录失败');
    })
  }
  //登录验证测试
  // if(method === 'GET' && req.path === '/api/user/login-test') {
  //   if(req.session.username) {
  //     return Promise.resolve(new SuccessModel())
  //   }
  //   return Promise.resolve(new ErrorModel('登录失败'))
  // }

}
module.exports = handleUserRouter