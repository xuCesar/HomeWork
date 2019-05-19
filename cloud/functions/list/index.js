// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'homework-gum5s'
})
const db = cloud.database()
const article = db.collection('article')

// 云函数入口函数
exports.main = async (event, context) => {
  let count, list
  try {
    count = await article
      .count()
  } catch (err) {
    console.log(err)
  }
  
  list = await article
    .skip(event.skip)
    .limit(event.limit)
    .get()
  return Object.assign({count: count.total}, list)
}