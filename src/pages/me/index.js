import Taro , { Component } from '@tarojs/taro';
import { View, Input, Text, Button, Image} from '@tarojs/components';

import './index.scss'

import WhiteSpace from '@cp/whiteSpace'

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
      <View className='me-view'>

        {/* <View className="bg"></View> */}

        <View className="base">
          <View className='photo-border'>
            <View className='photo'></View>
          </View>
          <View className="info1">
            <View className='name'>徐政 / Cesar</View>
            {/* <View className='career'>FE Developer</View> */}
            <View className='career'>FE Developer / UI Designer</View>
          </View>
        </View>
        
        <View className="info2">
          <View className='item'>
            <View className='age'>28</View>
            <View className='text'>AGE</View>
          </View>
          <View className='item'>
            <View className='expe'>5+</View>
            <View className='text'>EXPERIENCE</View>
          </View>
          <View className='item'>
            <View className='energy'>100</View>
            <View className='text'>ENERGY</View>
          </View>
        </View>
        <WhiteSpace />
        <View className='item-wrap'>
          <View className="item about">
            <View>ABOUT</View>
          </View>
          <View className="item edu">
            <View>EDUCATION</View>
          </View>
          <View className="item exp">
          <View>EXPERIENCE</View>
          </View>
          <View className="item dsn"><View>DESIGN</View></View>
          <View className="item skl"><View>SKILLS</View></View>
          <View className="item cnt"><View>CONTACT</View></View>
        </View>
        <View className='time'>
          / May 24th 2019 /
        </View>
        {/* <WhiteSpace /> */}
        {/* <Button onClick={this.onAddArticle}>Add Article</Button> */}
      </View>
    );
  }
}