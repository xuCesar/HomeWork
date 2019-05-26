import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Image} from '@tarojs/components';
import WhiteSpace from '@cp/whiteSpace'

import './index.scss'

class Project extends Component {

   config = {
       navigationBarTitleText: 'P'
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
      <View className='case-view'>
        <View className="header">
          <Text># CASE | PROJECT #</Text>
        </View>
        <WhiteSpace />
        <View className="case-list">

            <View className="item">
              <Image className='cover' mode='aspectFill' src='cloud://homework-gum5s.686f-homework-gum5s/images/WechatIMG1589.jpeg' />
              <View className='title'>这是第一次，我家的铲屎官走了这么久。</View>
            </View>

            {/* <View className="timeline">

              <View class="time">May 25th 2019</View>

              <View className="item cuIcon-noticefill">
                <View class="content bg-green shadow-blur">
                  <Image className='cover' mode='aspectFill' src='cloud://homework-gum5s.686f-homework-gum5s/images/WechatIMG1589.jpeg' />
                  <Text>22:22</Text> 【广州市】快件已到达地球
                </View>
              </View>

              <View className="item cuIcon-evaluate_fill">
                <View class="content bg-red shadow-blur">
                  这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
                </View>
              </View>

              <View className="item cuIcon-noticefill">
                <View class="content bg-grey shadow-blur">
                  这是第一次，我家的铲屎官走了这么久。
                </View>
              </View>

              <View className="item ">
                <View class="content bg-blue">
                  这是第一次，我家的铲屎官走了这么久。
                </View>
              </View>

            </View> */}
        </View>
      </View>
    );
  }
}
export default Project;