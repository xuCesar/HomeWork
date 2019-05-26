import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

import Head from '@cp/head'
import WhiteSpace from '@cp/whiteSpace'

import './index.scss'

class CadeDetail extends PureComponent {

   config = {
       navigationBarTitleText: ''
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
  render() {
    return (
      <View className='case-detail'>
        <View className="header">
          <View className="time">May 20th 2019</View>
          <View className="title">DIPTYQUE情人节限时店</View>
          
          <View className='tag-list'>
            <Text className='tag'>小程序</Text>
            <Text className='tag'>Taro</Text>
            <Text className='tag'>Dva</Text>
          </View>
        </View>

        <View className='case-border'></View>

        <View className="case-content">

          <View className="case-item case-info">
            <View className="name">
              <Text className='shape'>#</Text> 
              <Text>案例描述</Text>
              <View className='en-name'>CASE DESCRIPTION</View>
            </View>
            
            <View className='text'>
              <Text>用于构建交互式用户界面。通过静态编译减少框架运行时的代码量。在使用时能够书写更少的代码</Text>
              <Text>用于构建交互式用户界面。通过静态编译减少框架运行时的代码量。在使用时能够书写更少的代码</Text>
            </View>
          </View>

          <View className="case-item case-design">
            <View className="name">
              <Text className='shape'>#</Text> 
              <Text>案例设计</Text>
              <View className='en-name'>CASE DESIGN</View>
            </View>
          </View>

          <View className="case-item case-dev">
            <View className="name">
              <Text className='shape'>#</Text> 
              <Text>案例开发</Text>
              <View className='en-name'>CASE DEVELOPMENT</View>
            </View>
          </View>

          <View className="case-item case-dev">
            <View className="name">
              <Text className='shape'>#</Text> 
              <Text>案例总结</Text>
              <View className='en-name'>CASE SUMMARY</View>
            </View>
          </View>

        </View>

        <View className='case-border'></View>

        <View className="case-end">
          <Text className='end'>· END ·</Text>
        </View>
        {/* <WhiteSpace /> */}
        {/* <Head name='' /> */}

      </View>
    );
  }
}
export default CadeDetail;