<template>
    <div class="index_all">
      <div class="first_item">
        <div class="first_item_content">
          <div class="first_title">热 门 歌 单 推 荐</div>
          <div class="first_menu">
            <i class="first_menu_item" @click="changeFirstItems(indexWeb.RmRecommend.Rm)">热门</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="first_menu_item"  @click="changeFirstItems(indexWeb.RmRecommend.Light)">轻音乐</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="first_menu_item">电子</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="first_menu_item">90年代</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="first_menu_item">英语</i>
          </div>
          <div class="first_content">
            <div class="content_item" v-for="(item, index) in firstItems" :key="index">
              <div style="width:224px; height: 224px;overflow: hidden">
                <i class="content_item_img" style="width:224px; height: 224px; display: block; cursor: pointer" @mouseenter="onMouseOver1(index)" @mouseleave="onMouseOut1(index)">
                  <img :src="item.img" style="width:224px; height: 224px" class="first_img"/>
                  <router-link :to="'/songlist/'+ index">
                      <a class="img_player" style="display: block; width:224px; height: 224px; position: relative;
                top: -226px; line-height: 224px; text-align: center; color: #fff; background-color: rgba(0, 0, 0, 0.3)"
                        v-show="flag1[index].show">
                        <i class="iconfont" style="font-size: 45px; color: #fff">&#xe624;</i>
                      </a>
                  </router-link>
                </i>
              </div>
              <i class="content_item_name">
                <router-link :to="'/songlist/'+ index">
                  <i style="color: black; font-style: normal">{{item.name}}</i>
                </router-link>
              </i>
              <i class="content_item_play">播放量: {{item.play}}</i>
            </div>
          </div>
        </div>
      </div>
      <div class="second_item">
        <div class="second_item_content">
          <div class="second_title">歌 曲 首 发</div>
          <div class="second_menu">
            <i class="second_menu_item">推荐</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="second_menu_item">内地</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="second_menu_item">欧美</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="second_menu_item">日本</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="second_menu_item">港台</i>
          </div>
          <div class="second_content">
            <div class="second_content_item" v-for="(item, index) in secondItems" :key="index">
              <div style="width: 86px; height: 86px; overflow: hidden; float: left">
                <i class="second_content_item_img" @mouseenter="onMouseOver2(index)" @mouseleave="onMouseOut2(index)">
                  <img :src="item.img" style="max-width: 86px; max-height:86px"/>
                  <i class="iconfont" style="display: block; width:86px; height: 86px; position: relative;
                top: -87px; line-height: 86px; text-align: center; font-size: 28px; color: #fff; background-color: rgba(0, 0, 0, 0.3)"
                     v-show="flag2[index].show">&#xe624;</i>
                </i>
              </div>
              <i class="second_content_item_message">
                <i class="item_message_songName">{{item.songName}}</i>
                <i class="item_message_singer">{{item.singer}}</i>
              </i>
              <i class="second_content_item_time">{{item.time}}</i>
            </div>
          </div>
        </div>
      </div>
      <div class="third_item">
        <div class="third_item_content">
          <div class="third_title">新 碟 首 发</div>
          <div class="third_menu">
            <i class="third_menu_item">推荐</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="third_menu_item">内地</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="third_menu_item">欧美</i>
            <i style="margin-right: 30px; font-style: normal">|</i>
            <i class="third_menu_item">韩国</i>
          </div>
          <div class="third_content">
            <div class="third_content_item" v-for="(item, index) in thirdItems" :key="index">
              <div style="width: 224px;height: 224px; overflow: hidden">
                <i class="third_content_item_img" @mouseenter="onMouseOver3(index)" @mouseleave="onMouseOut3(index)">
                  <img :src="item.img" style="max-width: 224px; max-height: 224px; width: 100%"/>
                  <i class="iconfont" style="display: block; width:224px; height: 224px; position: relative;
                top: -225px; line-height: 224px; text-align: center; font-size: 45px; color: #fff; background-color: rgba(0, 0, 0, 0.3)"
                     v-show="flag3[index].show">&#xe624;</i>
                </i>
              </div>
              <i class="third_content_item_message">
                <i style="display: block; width: 200px;height: 22px; ;margin-right: 24px;margin-top: 10px;
                font-size: 14px;font-style: normal">
                  {{item.dishName}}
                </i>
                <i style="display: block;width: 200px;height: 22px; ;margin-right: 24px;margin-top: 5px;
                font-size: 14px;font-style: normal; color: #999">
                  {{item.singer}}
                </i>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div class="fourth_item">
        <div class="fourth_item_content">
          <div class="fourth_message">
            <i style="display: block; height: 30px;width: 150px; border-bottom: 2px solid rgba(204, 204, 204, 0.5);
            font-style: normal; margin-top: 50px">
              专业实训2前端部分
            </i>
            <i style="display: block;margin-top: 15px; ">
              <i style="font-style: normal; display: block">组长: 吴超</i>
              <i style="font-style: normal; display: block">组员: 李哲, 张基伟, 李锦超, 江杭</i>
            </i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const ERR_OK = 0
export default {
  data () {
    return {
      indexWeb: {},
      firstItems: [],
      secondItems: [],
      thirdItems: [],
      flag1: [{show: false}, {show: false}, {show: false}, {show: false}, {show: false}],
      flag2: [{show: false}, {show: false}, {show: false}, {show: false}, {show: false},
        {show: false}, {show: false}, {show: false}, {show: false}],
      flag3: [{show: false}, {show: false}, {show: false}, {show: false}, {show: false},
        {show: false}, {show: false}, {show: false}, {show: false}, {show: false}]
    }
  },
  created () {
    this.$http.get('/api/home').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.indexWeb = response.data.indexWeb
        // console.log(this.indexWeb)
        this.firstItems = this.indexWeb.RmRecommend.Rm
        this.secondItems = this.indexWeb.newSong.songRecommend
        this.thirdItems = this.indexWeb.newDish.dishRecommend
        // console.log(this.firstItems)
      }
    })
  },
  methods: {
    changeFirstItems (data) {
      this.firstItems = data
    },
    onMouseOver1 (index) {
      this.flag1[index].show = true
      // console.log(this.flag[index].show)
    },
    onMouseOut1 (index) {
      this.flag1[index].show = false
    },
    onMouseOver2 (index) {
      this.flag2[index].show = true
      // console.log(this.flag[index].show)
    },
    onMouseOut2 (index) {
      this.flag2[index].show = false
    },
    onMouseOver3 (index) {
      this.flag3[index].show = true
      // console.log(this.flag[index].show)
    },
    onMouseOut3 (index) {
      this.flag3[index].show = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .first_item
   width 100%
   height: 532px
   background-color #fafafa
   .first_item_content
     width 1200px
     margin: 0 auto
     height: 532px
    .first_title
      width: 1200px
      height: 40px
      line-height 40px
      padding-top 50px
      padding-bottom 24px
      font-size 22px
      text-align center
      font-weight bold
    .first_menu
      width 1200px
      height 50px
      line-height 50px
      text-align center
      .first_menu_item
        font-style normal
        font-size 16px
        color: #010
        margin-right 30px
        cursor pointer
        &:hover {
          color: rgba(49, 194, 124, 1)
        }
    .first_content
      width 1220px
      height: 310px
      padding-top 10px
      .content_item
        width: 224px
        height: 283px
        float left
        margin-right 20px
        .content_item_img
          overflow hidden
          transition: all 1s
          &:hover {
            transform scale(1.3)
          }
          .first_img
            transition: all 0.6s
            position relative
          .img_player
            &:hover+.first_img:hover{
              transform scale(1.2)
            }
        .content_item_name
          display block
          width: 224px
          margin-top 20px
          font-style normal
          font-size 16px
          cursor pointer
        .content_item_play
          display block
          width: 224px
          margin-top 8px
          font-style normal
          font-size 14px
          color:#999
 .second_item
    width: 100%
    height: 556px
    background-color #f2f2f2
    .second_item_content
      width 1200px
      margin: 0 auto
      height: 556px
      .second_title
        width: 1200px
        height: 40px
        line-height 40px
        padding-top 50px
        padding-bottom 24px
        font-size 22px
        text-align center
        font-weight bold
      .second_menu
        width 1200px
        height: 50px
        text-align center
        .second_menu_item
          font-style normal
          font-size 16px
          color: #010
          margin-right 30px
          cursor pointer
          &:hover {
            color: rgba(49, 194, 124, 1)
          }
      .second_content
        width 100%
        .second_content_item
          float left
          width 370px
          height: 89px
          padding-top 10px
          padding-bottom 10px
          margin-right 30px
          margin-bottom 10px
          border-bottom 1px solid rgba(204, 204, 204, 0.5)
          .second_content_item_img
            display block
            width: 86px
            height: 86px
            float left
            transition: all 1s
            &:hover {
              transform scale(1.2)
            }
          .second_content_item_message
            display block
            width 190px
            padding-left 10px
            height 86px
            float left
            .item_message_songName
              display: block
              max-width: 180px
              margin-top 25px
              margin-bottom 8px
              overflow hidden
              font-size 16px
              font-style normal
              white-space:nowrap
              text-overflow ellipsis
            .item_message_singer
              display: block
              max-width: 180px
              overflow hidden
              font-size 14px
              color: #999
              font-style normal
              white-space:nowrap
              text-overflow ellipsis
          .second_content_item_time
            display block
            height: 89px
            line-height: 89px
            margin-left 10px
            font-style normal
            color #999
            font-size 14px
            float left
 .third_item
    width 100%
    height 860px
    background-color #f7f7f8
    .third_item_content
      width 1250px
      margin: 0 auto
      height: 860px
      .third_title
        width: 1200px
        height: 40px
        line-height 40px
        padding-top 50px
        padding-bottom 24px
        font-size 22px
        text-align center
        font-weight bold
      .third_menu
        width 1200px
        height: 50px
        text-align center
        .third_menu_item
          font-style normal
          font-size 16px
          color: #010
          margin-right 30px
          cursor pointer
          &:hover {
            color: rgba(49, 194, 124, 1)
          }
      .third_content
        width: 100%
        height 660px
        .third_content_item
          display block
          width: 224px
          height 283px
          padding-bottom 25px
          margin-right 20px
          float left
          .third_content_item_img
            display block
            width 224px
            height 224px
            transition: all 1s
            &:hover {
              transform scale(1.2)
            }
 .fourth_item
    width: 100%
    height: 220px
    color #7f7f7f
    background-color #333
    .fourth_item_content
      width 1200px
      margin: 0 auto
      height: 220px
      .fourth_message
        width 100%
        height 50px
        padding-top 30px
</style>
