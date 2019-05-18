import { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss'

class Head extends PureComponent {
  
  render() {
    const {name} = this.props
    return (
      <View className='head'>{name}</View>
    );
  }
}
export default Head;