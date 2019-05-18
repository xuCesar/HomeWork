import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './dva'
import models from './models'

import Index from './pages/index'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})

const store = dvaApp.getStore()

import './styles/app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/detail/index',
      'pages/blog/index',
      'pages/project/index',
      'pages/me/index',
      'pages/addArticle/index',
      'pages/caseDetail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#c1c1c1',
      selectedColor: '#222',
      borderStyle: 'white',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'I',
        },
        {
          pagePath: 'pages/blog/index',
          text: 'B',
        },
        {
          pagePath: 'pages/project/index',
          text: 'P',
        },
        {
          pagePath: 'pages/me/index',
          text: 'M',
        }
      ]
    }
  }
  

  componentDidMount () {
    this.updateApp()
    wx.cloud.init({
      env: 'homework-gum5s',
      traceUser: true
    })
    // wx.cloud.callFunction({
    //   name: 'get',
    //   complete: res => {
    //     console.log('callFunction test result: ', res)
    //   }
    // })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  updateApp () {
    if (Taro.canIUse('getUpdateManager')) {
      const updateManager = Taro.getUpdateManager()
      updateManager.onCheckForUpdate(res => {
        // 请求完新版本信息的回调
        // console.log('hasUpdate', res.hasUpdate)
      })
      updateManager.onUpdateReady(() => {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success(res) {
            if (res.confirm) {
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(() => {
        // 新版本下载失败
      })
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
