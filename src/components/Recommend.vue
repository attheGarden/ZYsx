<template>
  <div class="recommend_all">
    <div class="r_first_item">
      <div class="r_first_backgroundImg">
        <img :src="R_backgroundImg" style="max-width: 1920px; margin-top: -100px"/>
      </div>
      <div class="r_first_message">
        <div style="width: 100%;height: 111px; padding-bottom: 10px;">
          <div style="width: 110px; height: 110px; margin: 0 auto; border: 2px solid #fff; border-radius: 55px;
            overflow: hidden; background-color: #fff">
            <img src="../../static/img/timg.png" style="max-height: 110px; max-width: 120px;"/>
          </div>
        </div>
        <div  style="width: 100%;height: 40px; padding-bottom: 10px;text-align: center;font-size: 22px;padding-top: 10px;
        line-height: 40px; color: #fff;">
          音乐推荐<i class="iconfont" style="margin-left: 5px">&#xe63b;</i>
        </div>
        <div style="width: 100%; margin-top: 50px; color: #fff; font-size: 18px">
          以下歌曲, 将会根据你最近收听的音乐进行推荐
        </div>
      </div>
    </div>
    <div class="r_second_item">
      <div class="r_second_item_content">
        <div class="r_second_title">你最近收听过的歌曲</div>
        <div class="r_second_song">
          <div class="song_item" v-for="(item, index) in last_songs" :key="index">
            <div class="song_img" @mouseenter="onMouseOver4(index)" @mouseleave="onMouseOut4(index)">
              <img :src="item.img" style="max-height: 224px; max-width: 244px"/>
              <i class="iconfont" style="display: block; width:224px; height: 224px; position: relative;
                top: -225px; line-height: 224px; text-align: center; font-size: 55px; color: #fff; background-color: rgba(0, 0, 0, 0.3)"
                 v-show="flag4[index].show">&#xe624;</i>
            </div>
            <div class="song_name">{{item.name}}</div>
            <div class="song_singer">{{item.singer}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="r_third_item">
      <div class="r_third_item_content">
        <div class="r_third_title">
          为你推荐的歌曲
          <i class="r_third_title_change">
            <i class="iconfont" style="font-size: 18px">&#xe603;</i>
            换一批
          </i>
        </div>
        <div class="r_third_song">
          <div class="song_item" v-for="(item, index) in recommend_songs" :key="index">
            <div class="song_img" @mouseenter="onMouseOver5(index)" @mouseleave="onMouseOut5(index)">
              <img :src="item.img" style="max-height: 224px; max-width: 244px"/>
              <i class="iconfont" style="display: block; width:224px; height: 224px; position: relative;
                top: -225px; line-height: 224px; text-align: center; font-size: 55px; color: #fff; background-color: rgba(0, 0, 0, 0.3)"
                 v-show="flag5[index].show">&#xe624;</i>
            </div>
            <div class="song_name">{{item.name}}</div>
            <div class="song_singer">{{item.singer}}</div>
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
      R_backgroundImg: '',
      person: {
        userId: '',
        nickname: '123',
        img: ''
      },
      flag4: [{show: false}, {show: false}, {show: false}, {show: false}],
      flag5: [{show: false}, {show: false}, {show: false}, {show: false}],
      last_songs: [
        {
          name: 'BLACKPINK IN YOUR AREA',
          singer: 'BLACKPINK',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004d0Yr8345cAq.jpg?max_age=2592000'
        },
        {
          name: 'Dreamer (Remixes Vol. 1)',
          singer: 'Martin Garrix / Mike Yung',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001H2Xqx4TAUeH.jpg?max_age=2592000'
        },
        {
          name: 'Daily',
          singer: 'androp',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Bmqn03cHPco.jpg?max_age=2592000'
        },
        {
          name: 'go for it! (Version\'18)',
          singer: 'DREAMS COME TRUE',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Bmqn03cHPco.jpg?max_age=2592000'
        }
      ],
      recommend_songs: [
        {
          name: 'BLACKPINK IN YOUR AREA',
          singer: 'BLACKPINK',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004d0Yr8345cAq.jpg?max_age=2592000'
        },
        {
          name: 'Dreamer (Remixes Vol. 1)',
          singer: 'Martin Garrix / Mike Yung',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001H2Xqx4TAUeH.jpg?max_age=2592000'
        },
        {
          name: 'Daily',
          singer: 'androp',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Bmqn03cHPco.jpg?max_age=2592000'
        },
        {
          name: 'go for it! (Version\'18)',
          singer: 'DREAMS COME TRUE',
          img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Bmqn03cHPco.jpg?max_age=2592000'
        }
      ]
    }
  },
  created () {
    this.$http.get('/api/commonData').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.R_backgroundImg = response.data.reccommend_image
        // console.log(this.Login)
      }
    })
    this.getPerson()
  },
  methods: {
    getPerson () {
      this.person = this.$route.params.up_person
      // console.log(this.up_person)
    },
    onMouseOver4 (index) {
      this.flag4[index].show = true
      // console.log(this.flag[index].show)
    },
    onMouseOut4 (index) {
      this.flag4[index].show = false
    },
    onMouseOver5 (index) {
      this.flag5[index].show = true
      // console.log(this.flag[index].show)
    },
    onMouseOut5 (index) {
      this.flag5[index].show = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .r_first_item
    width 100%
    height: 380px
    background-color #fafafa
    overflow hidden
    .r_first_message
      position relative
      width 1120px
      height 325px
      margin 0 auto
      top: -900px
      z-index 2
  .r_second_item
    width 100%
    height: 528px
    background-color #fafafa
    .r_second_item_content
      width 1120px
      height 528px
      margin 0 auto
      .r_second_title
        width 100%
        height: 50px
        line-height 50px
        padding-top 50px
        padding-bottom 24px
        font-size 22px
        font-weight bold
      .r_second_song
        width: 100%
        .song_item
          width: 244px
          height: 300px
          margin-right 30px
          float left
          .song_img
            width 244px
            height: 244px
            background-color #fff
          .song_name
            width: 200px
            height: 30px
            font-size 16px
            margin-right 44px
            font-style normal
            white-space:nowrap
            text-overflow ellipsis
          .song_singer
            font-style normal
            white-space:nowrap
            text-overflow ellipsis
            font-size 14px
            color #7e8c8d
  .r_third_item
    width: 100%
    height: 528px
    .r_third_item_content
      width 1120px
      height: 528px
      margin 0 auto
      .r_third_title
        width 100%
        height: 50px
        line-height 50px
        padding-top 50px
        padding-bottom 24px
        font-size 22px
        font-weight bold
        .r_third_title_change
          display: block
          height: 40px
          line-height 40px
          text-align center
          width 100px
          font-size: 18px
          font-style normal
          margin-right 80px
          background-color #f6f6f6
          border-radius 2px
          border  1px solid rgba(204, 204, 204, 0.5)
          float right
          cursor pointer
      .r_third_song
        width: 100%
        .song_item
          width: 244px
          height: 300px
          margin-right 30px
          float left
          .song_img
            width 244px
            height: 244px
            background-color #fff
          .song_name
            width: 200px
            height: 30px
            font-size 16px
            margin-right 44px
            font-style normal
            white-space:nowrap
            text-overflow ellipsis
          .song_singer
            font-style normal
            white-space:nowrap
            text-overflow ellipsis
            font-size 14px
            color #7e8c8d
</style>
