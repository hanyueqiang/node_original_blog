const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method //get post
  // const url = req.url;
  // const path = url.split('?')[0];

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    // const listData = getList(author, keyword);
    // return new SuccessModel(listData)
    const result = getList(author, keyword);
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id;
    // const data = getDetail(id);
    // return new SuccessModel(data);
    const result = getDetail(id);
    return result.then(data => {
      return new SuccessModel(data);
    })
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    // const data = newBlog(req.body)
    req.body.author = 'zhangsan' //假数据 开发完登录后变成真数据
    return result.then(data => {
      return new SuccessModel(data);
    })
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    //const data = updateBlog(req.body);
    const result = updateBlog(req.body);
    return result.then(val => {
      if (val) {
        return new SuccessModel();
      } else {
        return new ErrorModel('更新博客失败');
      }
    })
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    //const data = deleteBlog(req.body);
    req.body.author = 'zhangsan' //假数据 开发完登录后变成真数据
    const result = deleteBlog(req.body);
    return result.then(val => {
      if (val) {
        return new SuccessModel();
      } else {
        return new ErrorModel('删除博客失败');
      }
    })

  }
}

module.exports = handleBlogRouter