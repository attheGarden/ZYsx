<template>
  <div>
    <div class="header">
      <div class="header_content">
        <div class="header_top">
          <a class="header_logo">
            <img src="../../static/img/timg.png" style="max-height: 70px; cursor: default; display: block; float: left; padding-top: 7px"/>
            <i style="font-style: normal; font-size: 22px; font-weight: bold; color: black; display: block; float: left">音乐推荐网站</i>
          </a>
          <a class="header_items">
            <i :class="{item_on: index_on, item_not: index_not}"  @click="toIndex">音乐馆</i>
            <i :class="{item_on: recommend_on, item_not: recommend_not}" @click="toRecommend">我的音乐</i>
          </a>
          <a class="header_search">
            <el-input
              placeholder="请输入内容"
              v-model="search_input">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </a>
          <a class="header_message">
            <i class="person_img">
              <img :src="person.img" style="max-width:85px; max-height: 80px; border-radius: 8px"/>
            </i>
            <i style="display:block; width: 180px; height: 45px; float: left; padding-bottom: 32px; padding-top:12px; line-height: 45px">
              <i style="font-style: normal; color: black;">{{person.nickname}}</i>
              <i class="iconfont" style="margin-left: 15px; color: black" @click="loginOut">&#xe60b;</i>
            </i>
          </a>
        </div>
        <div class="header_bottom">
          <i class="bottom_item" v-for="(item, index) in menu" :key="index">
            <router-link :to="item.path"><i class="bottom_item_menu_item">{{item.item}}</i></router-link>
          </i>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// const ERR_OK = 0
export default {
  data () {
    return {
      index_on: true,
      index_not: false,
      recommend_on: false,
      recommend_not: true,
      search_input: '',
      menu: [
        {item: '首页', path: '/home'}, {item: '排行榜', path: ''}, {item: 'MV', path: ''}, {item: '歌手', path: ''}
      ],
      person: {
        userId: '280552052',
        nickname: '喵瞄淼庙',
        img: 'http://i5.3conline.com/images/piclib/201202/23/batch/1/127281/1329961434629h0z9jnl3yd.jpg'
      },
      randoms: []
    }
  },
  created () {
    // this.person.userId = this.$route.params.person_userId
    // this.person.nickname = this.$route.params.person_nickname
    // this.person.img = this.$route.params.person_img
    // console.log(this.person)
    /* if (Cookies.getCookie('Token') !== '') {
    } else {
    } */
  },
  methods: {
    toIndex () {
      this.index_on = true
      this.index_not = false
      this.recommend_on = false
      this.recommend_not = true
      this.menu = [
        {item: '首页', path: '/home'}, {item: '排行榜', path: ''}, {item: 'MV', path: ''}, {item: '歌手', path: ''}
      ]
      this.$router.push('/home')
    },
    toRecommend () {
      this.index_on = false
      this.index_not = true
      this.recommend_on = true
      this.recommend_not = false
      this.menu = [{item: '推荐', path: ''}]
      this.$router.push({path: '/home/recommend', params: {up_person: this.person}})
    },
    loginOut () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width: 100%
    height: 142px
    border-bottom 1px solid rgba(204, 204, 204, 0.5)
    .header_content
      margin 0 auto
      width: 1200px
      height: 100%
      .header_top
        height 89px
        width: 100%
        border-bottom 1px dashed rgba(204, 204, 204, 0.5)
        .header_logo
          display block
          width: 230px
          height: 89px
          padding-right 10px
          line-height 89px
          float: left
          cursor default
        .header_items
          display block
          width: 250px
          margin-left 30px
          margin-right 100px
          height: 100%
          float left
          cursor default
          .item_on
            display block
            height 89px
            line-height 89px
            padding 0 15px
            font-size 18px
            float left
            font-style normal
            cursor pointer
            background-color: rgba(49, 194, 124, 1)
            color: #fff
          .item_not
            display block
            height 89px
            line-height 89px
            padding 0 15px
            font-size 18px
            float left
            font-style normal
            cursor pointer
            background-color: #fff
            color: black
            &:hover {
              color rgba(49, 194, 124, 1)
            }
        .header_search
          width: 250px
          height: 89px
          line-height 89px
          float left
        .header_message
          display block
          width: 280px
          height: 89px
          padding-left 35px
          float left
          .person_img
            display block
            width: 100px
            height: 70px
            padding-top: 12px
            padding-bottom 7px
            overflow hidden
            float: left
      .header_bottom
        display block
        height: 52px
        line-height 52px
        width: 900px
        padding-left 170px
        text-align center
        .bottom_item
          margin-right 70px
          font-style normal
          color black
          font-size 16px
          cursor pointer
          .bottom_item_menu_item
            font-style normal
            color black
            &:hover {
              color rgba(49, 194, 124, 1)
            }
  .content
    width: 100%
</style>
