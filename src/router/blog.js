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
    const listData = getList(author, keyword);
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id;
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body)
    return new SuccessModel(data);
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const data = updateBlog(req.body);
    if(data) {
      return new SuccessModel(data);
    }else {
      return new ErrorModel('更新失败');
    }
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const data = deleteBlog(req.body);
    if(data) {
      return new SuccessModel(data);
    }else {
      return new ErrorModel('删除失败');
    }
  }
}

module.exports = handleBlogRouter