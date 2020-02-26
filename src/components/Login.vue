<template>
    <div class="login_all">
      <div class="login_background">
        <img :src="commonData.backgroundImage" class="background" style="max-width: 1920px">
      </div>
      <div class="login_message">
        <div class="message_img">
          <a class="img_one">
            <img src="../../static/img/timg.png" style="max-height: 90px; cursor: default"/>
          </a>
          <a class="img_title" style="cursor: default">欢迎来到 <i class="iconfont">&#xe63b;</i></a>
          <a class="img_content" style="cursor: default">音乐推荐网站</a>
        </div>
        <div class="message_content">
          <a class="content_title" style="cursor: default">登录</a>
          <a class="content_uid">
            <i class="iconfont" style="display: block; float: left;width: 30px; height: 100%; line-height: 40px;cursor: default">&#xe657;</i>
            <i class="uid_input">
              <el-input v-model="loginForm.uid" placeholder="请输入账号"></el-input>
            </i>
          </a>
          <a class="content_password">
            <i class="iconfont" style="display: block; float: left;width: 30px; height: 100%; line-height: 40px;cursor: default">&#xe652;</i>
            <i class="password_input">
              <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
            </i>
          </a>
          <a class="content_submit" @click="handleLogin()">登录</a>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
const ERR_OK = 0
export default {
  data () {
    return {
      commonData: {},
      loginForm: {
        uid: '',
        password: ''
      },
      userToken: {}
    }
  },
  created () {
    this.$http.get('/api/commonData').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.commonData = response.data
        // console.log(this.Login)
      }
    })
  },
  methods: {
    handleLogin () {
      let _this = this
      console.log(_this.loginForm)
      axios({
        method: 'get',
        url: '/login',
        data: _this.loginForm
      }).then(res => {
        console.log(res.info)
        if (res.code === 0) {
          alert('密码或账号错误!')
        }
        if (res.code === 1) {
          alert('登录成功!')
          let _temp = res.info
          this.$router.push({path: '/home',
            params: {
              person_userId: _temp.userId,
              person_nickname: _temp.nickname,
              person_img: _temp.img}})
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login_all
  .login_background
    width: 100%
    float: left
    .background
      position: absolute
      z-index:-1
      margin-left: -8.5px
      margin-top: -151px
      background-size: 100% 100px
      background-repeat: no-repeat
  .login_message
    position relative
    top: 150px
    margin: 0 auto
    width: 750px
    height: 450px
    .message_img
      width: 400px
      height: 450px
      background-color rgba(133, 147, 156, 0.7)
      float left
      .img_one
        display block
        width 100%
        text-align center
        margin-top 135px
        height: 100px
      .img_title
        display block
        width: 300px
        height: 40px
        line-height 40px
        font-size: 21px
        margin 0 50px
        color #fff
        border-bottom 2.5px solid rgba(255, 255 , 204, 0.5)
      .img_content
        display block
        width: 300px
        height: 40px
        line-height 40px
        font-size: 18px
        margin 0 50px
        color #fff
    .message_content
      width: 350px
      height: 450px
      float left
      background-color #fff
      .content_title
        display block
        width: 300px
        height: 45px
        line-height 45px
        margin-top 20px
        font-size 22px
        text-align center
        padding 0 25px
        border-bottom 2.5px solid rgba(204, 204 , 204, 0.5)
      .content_uid
        display block
        width: 300px
        height: 40px
        margin-top 90px
        padding 0 25px
        .uid_input
          width: 250px
          height: 40px
          display block
          float: left
      .content_password
        display block
        width: 300px
        height: 40px
        margin-top 15px
        padding 0 25px
        .password_input
          width: 250px
          height: 40px
          display block
          float: left
      .content_submit
        display block
        width: 250px
        height: 40px
        line-height 40px
        text-align center
        margin-top 25px
        margin-left 55px
        margin-right 25px
        color black
        background-color: rgba(172,180,244, 1)
        border-radius: 8px
        &:hover {
          background-color: rgba(172,180,244,0.5)
          color #7e8c8d
        }
</style>
