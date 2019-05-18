import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Image, Button} from '@tarojs/components';
import { MTransition } from 'mounted'
import moment from 'moment'

const db = wx.cloud.database()
const article = db.collection('article')

import './index.scss'

class ArticleDetail extends PureComponent {

   config = {
       navigationBarTitleText: ''
  }

  state={
    article: null
  }

  componentWillMount () {}
  componentDidMount () {
    Taro.showLoading({
      title: '加载中'
    })
    article.doc(this.$router.params.id).get().then(res => {
      this.setState({
        article: res.data
      }, () => {
        Taro.hideLoading()
      })
    })
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const {article} = this.state
    if (!article) return false
    return (
      <View className='article-view'>
        
        <View className='cover'>
          {
            article.cover && <Image className='cover' lazyLoad={true} mode='aspectFill' src={article.cover} />
          }
        </View>
        
        <View className='title'>{article.title}</View>
        <View className='info'>
          <Text className='author'> {article.author} </Text>
          <Text>{moment(article.updateTime).format("MMM Do YYYY")}</Text>
        </View>
        <View className='content'>
          <Text>{article.content}</Text>
        </View>
      </View>
    );
  }
}
export default ArticleDetail;