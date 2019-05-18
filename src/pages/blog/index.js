import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import ArticleItem from '@cp/articleItem'

import './index.scss'

class Blog extends Component {

   config = {
       navigationBarTitleText: 'B'
  }

  state={
    articles: null
  }

  componentWillMount () {}
  componentDidMount () {
    wx.cloud.callFunction({
      name: 'list',
    }).then(res => {
      this.setState({
        articles: res.result.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const { articles } = this.state
    if (!articles) return null
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