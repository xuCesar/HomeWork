import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import ArticleItem from '@cp/articleItem'

import './index.scss'

class Blog extends Component {

   config = {
       navigationBarTitleText: 'B'
  }

  state={
    count: null,
    articles: [],
    loading: false,
  }

  componentWillMount () {}
  componentDidMount () {
    this.getDataList()
  }
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  getDataList = () => {
    const { articles } = this.state
    wx.cloud.callFunction({
      name: 'list',
      data: {
        skip: articles.length || 0,
        limit: 5
      }
    }).then(res => {
      this.setState({
        count: res.result.count,
        articles: [...articles, ...res.result.data],
        loading: true
      })
    }).catch(err => {
      console.log(err)
    })
  }

  onReachBottom = () => {
    const { articles, count } = this.state
    articles.length < count ? this.getDataList() : null
  }

  render() {
    const { articles } = this.state
    if (!articles.length) return null
    return (
      <View className='blog-view'>

        <View className="header">
          <Text># BLOG | ARTICLE #</Text>
        </View>
        {
          articles && articles.map((item, index) => {
            return (
              <ArticleItem key={index} article={item} />
            )
          })
        }

      </View>
    );
  }
}
export default Blog;