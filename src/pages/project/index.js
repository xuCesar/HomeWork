import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

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
      <View>
        Project
      </View>
    );
  }
}
export default Project;