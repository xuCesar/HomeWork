// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'homework-gum5s'
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log('event', event)
  console.log('context', context)
  try {
    return await cloud.uploadFile({
      cloudPath: event.path,
      fileContent: new Buffer(event.file, 'base64')
    })
  } catch (e) {
    return e
  }
}