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
        <View className="card">
          <View className="card-header">
            <Image className='cover' mode="aspectFill" src={article.cover} />
            <View className="title">{article.title}</View>
          </View>
          <View className="card-footer">
              <View className="tag"># 小程序</View>
              <View className="time">{moment(article.updateTime).format("MMM Do YYYY")}</View>
            </View>
        </View>
      </View>
    );
  }
}
export default ArticleItem;