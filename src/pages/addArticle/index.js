import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button, Textarea } from '@tarojs/components';
import { vcode } from '../../utils'

import { AtImagePicker } from 'taro-ui'

import Head from '@cp/head'
import WhiteSpace from '@cp/whiteSpace'

import './index.scss'

const db = wx.cloud.database()
const article = db.collection('article')

class AddArticle extends PureComponent {

   config = {
       navigationBarTitleText: '编辑文章'
  }

  state = {
    files: [],
    title: null, 
    author: null, 
    cover: null, 
    content: null,
    showAddBtn: true
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  onChange = (files) => {
    this.setState({
      files,
      // showAddBtn: false
    })
  }

  onFail = (mes) => {
    console.log(mes)
  }

  onImageClick = (index, file) => {
    console.log(index, file)
  }

  onTextareaBlur = () => {

  }

  onAddArticle = () => {
    wx.getFileSystemManager().readFile({
      filePath: this.state.files[0].url,
      encoding: 'base64',
      success: res => {
        console.log(res)
        wx.cloud.callFunction({
          name: 'upload',
          data: {
            path: 'images/' + vcode(new Date()) + '.png',
            file: res.data
          }
        }).then(res => {
          console.log('success')
          console.log(res)
          if (res.result.statusCode === 200) {
            article.add({
              data: {
                title: '如何快速开发一个自己的项目脚手架？',
                author: 'Abc',
                cover: res.result.fileID,
                content: '5月17日，小米集团宣布新的组织架构调整和人事任命。集团董事长兼CEO雷军兼任中国区总裁，全面负责中国区业务开展和团队管理；同时成立大家电事业部，任命集团高级副总裁王川为大家电事业部总裁，负责除电视之外的空调、冰箱、洗衣机等大家电品类的业务开展和团队管理，向CEO汇报。',
                createTime: db.serverDate(),
                updateTime: db.serverDate()
              }
            }).then(res => {
              console.log(res)
            })
          }
        }).catch(err => {
          console.log('fail')
          console.log(err)
        })
      }
    })
  }


  render() {
    const { title, author, cover, content } = this.state
    return (
      <View className='add-article'>
        <Head name='Add Article' />
        <WhiteSpace />

        <View className='item'>
          <Input className='input' type='text' placeholder='文章标题' maxLength={30} />
        </View>

        <WhiteSpace />

        <View className='item'>
          <Input className='input' type='text' placeholder='作者名称' maxLength={10} />
        </View>

        <WhiteSpace />

        <View className='item cover-upload'>
          <View className='cover'>封面图片</View>
          <AtImagePicker
            length={2}
            showAddBtn={this.state.files.length === 0 ? true : false}
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            onFail={this.onFail.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
          />
        </View>

        <WhiteSpace />

        <View className='textarea'>
          <Textarea
            id='name' 
            className=''
            placeholder='输入文章' 
            placeholderClass='input-holder' 
            value=''
            style='background:#fff;width:100%;min-height:100px;' 
            autoHeight
            onBlur={this.onTextareaBlur}
          />
        </View>

        <WhiteSpace />

        <View className="btn-group">
          <Button className='add-btn' onClick={this.onAddArticle}>添加文章</Button>
          <Button className='update-btn'>更新文章</Button>
        </View>

      </View>
    );
  }
}
export default AddArticle;