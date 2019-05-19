import Taro , { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';

import moment from 'moment'


import './index.scss'

class ArticleItem extends PureComponent {

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  onViewToDetail = id => {
    Taro.navigateTo({
      url: '/pages/detail/index?id='+id
    })
  }

  render() {
    const { article } = this.props
    if (!article) return null
    return (
      <View className="card-item" onClick={this.onViewToDetail.bind(this, article._id)}>
        <Image className='card-bg' mode="aspectFill" src={article.cover} />
        <View className="card">
          <View className="head">{article.title}</View>
          <View className="body">
            <View className="tag"># 小程序</View>
            <View className="time">{moment(article.updateTime).format("MMM Do YYYY")}</View>
          </View>
        </View>
      </View>
    );
  }
}
export default ArticleItem;