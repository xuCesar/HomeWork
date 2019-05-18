import Taro , { Component } from '@tarojs/taro';
import { View, Input, Text, Button} from '@tarojs/components';

export default class Me extends Component {

   config = {
       navigationBarTitleText: 'M'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  onAddArticle = () => {
    Taro.navigateTo({
      url: '/pages/addArticle/index'
    })
  }

  render() {
    return (
      <View>
        <Button onClick={this.onAddArticle}>Add Article</Button>
      </View>
    );
  }
}