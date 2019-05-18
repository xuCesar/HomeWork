// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'homework-gum5s'
})
const db = cloud.database()
const article = db.collection('article')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await article
    .where({
      _openid: wxContext.OPENID,
    })
    .get()
}