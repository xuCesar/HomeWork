import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import moment from 'moment'

import Head from '@cp/head'
import WhiteSpace from '@cp/whiteSpace'

import './index.scss'

const db = wx.cloud.database()
const article = db.collection('article')
const _ = db.command

class Index extends Component {

  config = {
    navigationBarTitleText: 'I'
  }

  state = {
    blog_list: []
  }

  componentDidMount () {
    article.limit(5).get({
      success: res => {
        // console.log(res)
        this.setState({
          blog_list: res.data
        })
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onViewArticle = (id) => {
    Taro.navigateTo({
      url: '/pages/detail/index?id='+id
    })
  }

  onViewToBlog = () => {
    Taro.switchTab({
      url: '/pages/blog/index'
    })
  }

  onViewCaseDetail = () => {
    Taro.navigateTo({
      url: '/pages/caseDetail/index'
    })
  }

  render () {
    return (
      <View className='index-view'>
        <Swiper
            className='swiper-banner'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            autoplay
          >
            <SwiperItem style='backGround: #FFB0B0'>1</SwiperItem>
            <SwiperItem style='backGround: #BCC9AC'>2</SwiperItem>
            <SwiperItem style='backGround: #BCD4E2'>3</SwiperItem>
        </Swiper>

        <View className='intro-view'>
          <Head name='Intro' />
          <View className='descrption'>
            <View className='p'>新建项目选择一个空目录，填入 AppID（使用云开发能力必须填写 AppID），勾选创建 “云开发 QuickStart 项目”，点击创建即可得到一个展示云开发基础能力的示例小程序。</View>
            <View className='p'>创建了第一个云开发小程序后，在使用云开发能力之前需要先开通云开发。在开发者工具工具栏左侧，点击 “云开发” 按钮即可开通云开发。云开发开通后自动获得一套云开发环境，各个环境相互隔离，每个环境都包含独立的数据库实例、存储空间、云函数配置等资源。每个环境都有唯一的环境 ID 标识，初始创建的环境自动成为默认环境。</View>
            <View className="p">指定后云能力可以在所有基础库中使用，并且如果云能力有更新，并不会随着基础库升级而自动升级，需在后续版本发布后重新上传。如 2.2.4 发布后，需重新上传才能将云能力更新至 2.2.4 版本的云能力。</View>
          </View>
          <View className='view-more'>VIEW MORE</View>
        </View>
        <WhiteSpace />
        <View className='article-view'>
          <Head name='Article' />
          <View className="article-list">
          {
            this.state.blog_list && this.state.blog_list.map((item, index) => {
              return (
                <View className='list' id={item._id} key={index} onClick={this.onViewArticle.bind(this, item._id)}>
                  <View className='cover'>
                    <Image className='cover-img' lazyLoad={true} mode='aspectFill' src={item.cover} />
                  </View>
                  <View className='article'>
                    <View className='title'>{item.title}</View>
                    <View className="info">
                      <Text className='time'>{moment(item.updateTime).format("MMM Do YYYY")}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
          </View>
          <View className='view-more' onClick={this.onViewToBlog}>VIEW ALL ARTICLE</View>
        </View>
        <WhiteSpace />

        <View className="case-view">
          <Head name='Cases' />
          <View className="case-list">
            <View className='case-item' onClick={this.onViewCaseDetail}>
              <View className='case-name'>Diptyque情人节限时店</View>
              <View className='tag-list'>
              <Text>小程序</Text>
              <Text>/</Text>
              <Text>Taro</Text>
              <Text>/</Text>
              <Text>Dva</Text>
              </View>
            </View>

            <View className='case-item'>
              <View className='case-name'>Diptyque情人节限时店</View>
              <View className='tag-list'>
              <Text>小程序</Text>
              <Text>/</Text>
              <Text>Taro</Text>
              <Text>/</Text>
              <Text>Dva</Text>
              </View>
            </View>


          </View>
          <View className='view-more'>VIEW ALL CASE</View>
        </View>

        {/* <View className="product-view">
          <View className='title'>Product</View>
          <View className="list">
            <Image className='cover' src=''></Image>
            <View className='title'>小程序云开发能力的探讨</View>
          </View>
        </View> */}

      </View>
    )
  }
}

export default Index
