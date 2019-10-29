const getList = (author, keyword) => {
  //先返回假数据 格式要正确
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1572346562651,
      author: '张三'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1572346628178,
      author: '李四'
    }
  ]
}

const getDetail = (id) => {
  //先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1572346562651,
    author: '张三'
  }
}

module.exports = {
  getList,
  getDetail
}