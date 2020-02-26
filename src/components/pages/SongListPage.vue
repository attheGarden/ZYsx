<template>
    <div class="songlist_all">
      <div class="songlist_content">
        <div class="songlist_top">
          <div class="top_img">
            <img :src="topData.img" style="max-width: 250px; max-height: 250px"/>
          </div>
          <div class="top_message">
            <div class="message_title">{{topData.name}}</div>
            <div class="message_singer">
              <i class="iconfont" style="font-size: 18px">&#xe657;</i>
              {{topData.author}}
            </div>
            <div class="message_items">
              <i class="message_item">标签: {{topData.label}}</i>
              <i class="message_item">播放量: {{topData.play}}</i>
              <i class="message_item">收藏量: {{topData.collection}}</i>
            </div>
            <div class="message_buttons">
              <i class="button_one">
                <i class="iconfont" style="font-size: 14px">&#xe624;</i>
                播放全部
              </i>
              <i class="button_two">
                <i class="iconfont" style="font-size: 15px">&#xe60c;</i>
                收藏
              </i>
              <i class="button_two">
                <i class="iconfont" style="font-size: 15px">&#xe60d;</i>
                评论
              </i>
              <i class="button_two">
                <i class="iconfont" style="font-size: 15px">&#xe604;</i>
                更多
              </i>
            </div>
          </div>
        </div>
        <div class="songlist_main">
          <div class="main_left">
            <div class="left_header">
              <i class="header_one">歌曲</i>
              <i class="header_two">歌手</i>
              <i class="header_three">专辑</i>
              <i class="header_four">时长</i>
            </div>
            <div :class="{left_item_one: index%2+1, left_item_two: index%2}" v-for="(item, index) in songlist" :key="index">
              <i class="item_zero">{{index+1}}</i>
              <i class="item_one">{{item.song}}</i>
              <i class="item_two">{{item.singer}}</i>
              <i class="item_three" :title="item.album">{{item.album}}</i>
              <i class="item_four">{{item.time}}</i>
            </div>
          </div>
          <div class="main_right">
            <div style="height: 46px; font-size: 20px">简介</div>
            <div style="font-size: 14px; line-height: 20px">
              这一期给大家分享一下日语嘻哈， 都是東方幻想乡的歌。 希望大家都能喜欢！ 以前的标题： 日系说唱：感受到了么 这是治愈还是孤独 封面原图p站：21083839 by：听风i 游戏背景故事
            </div>
            <div style="margin-top: 5px; font-size: 14px">[ 更 多 ]</div>
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
export default {
  data () {
    return {
      topData: {
        'songListId': 1,
        'play': '2.2万',
        'label': '英语、流行',
        'collection': '4396',
        'name': '每日新歌: A妹喊你来听麦莉新歌',
        'author': 'Zico',
        'img': 'http://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE9F0u6oqZZRbKsR8YKvIRUaicz6MtnfrL0g/300?n=1'
      },
      songlist: [
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 ( 追梦人 )',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-46543561',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 ( 追梦人 )',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        },
        {
          song: '幻灯花原曲：オリエンタルダークフライト',
          singer: 'アリレム',
          album: 'LiFESICK',
          time: '06:08'
        },
        {
          song: '夢追人 (追梦人)',
          singer: '司芭扶 / ｙｔｒ',
          album: '魂音泉別館 -壱参-',
          time: '04:19'
        }
      ]
    }
  },
  created () {
    // console.log(this.$route.params.id)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .songlist_all
    background-color #fff
    min-height 1500px
    width: 100%
    .songlist_content
      width 1200px
      min-height 1450px
      margin 0 auto
      .songlist_top
        padding-top: 50px
        height 250px
        width: 1200px
        background-color: #f9f9f9
        .top_img
          width: 250px
          height: 250px
          float left
        .top_message
          width: 895px
          height: 250px
          padding-left 305px
          .message_title
            height: 50px
            width: 100%
            font-size 31px
            line-height 50px
          .message_singer
            width: 520px
            height: 24px
            line-height 24px
            font-size 14px
            margin-bottom 10px
          .message_items
            width: 520px
            height: 81px
            padding-top 8px
            margin-bottom 9px
            .message_item
              display: block
              height: 27px
              width: 400px
              font-style normal
              font-size 14px
          .message_buttons
            width: 100%
            height: 38px
            .button_one
              display block
              float left
              line-height 36px
              width: 84px
              height: 36px
              padding 0 16px
              margin-right 10px
              color #fff
              font-style normal
              background-color rgba(49, 194, 124, 1)
              border 1px solid rgba(49, 194 , 124, 1)
              border-radius 3px
              cursor pointer
              &:hover {
                background-color rgba(49, 194, 124, 0.7)
              }
            .button_two
              display block
              float left
              line-height 36px
              width: 84px
              height: 36px
              padding 0 16px
              margin 0 10px
              font-style normal
              border-radius 3px
              border 1px solid rgba(201, 201, 201, 1)
              cursor pointer
              &:hover {
                background-color rgba(201, 201, 201, 0.5)
              }
      .songlist_main
        width: 100%
        padding-top 20px
        .main_left
          width: 857px
          float left
          .left_header
            width 761px
            height:50px
            line-height 50px
            padding-left 46px
            padding-right 50px
            font-size 14px
            color rgb(153, 153, 153)
            background-color rgb(251, 251, 253)
            .header_one
              display block
              float left
              width: 380px
              height: 50px
              font-style normal
            .header_two
              display block
              float left
              width: 120px
              height: 50px
              font-style normal
            .header_three
              display: block
              float left
              width: 120px
              height: 50px
              padding-left 20px
              font-style normal
            .header_four
              display block
              float right
              width: 50px
              margin-right 30px
              font-style normal
          .left_item_one
            width 791px
            height:50px
            line-height 50px
            padding-left 16px
            padding-right 50px
            font-size 14px
            background-color rgb(255, 255, 255)
            .item_zero
              display block
              float left
              width 10px
              padding-right 20px
              text-align center
              color rgb(153, 153, 153)
              font-style normal
              font-size 14px
            .item_one
              display block
              float left
              width: 380px
              height: 50px
              font-style normal
            .item_two
              display block
              float left
              width: 120px
              height: 50px
              font-style normal
            .item_three
              display: block
              float left
              width: 120px
              height: 50px
              padding-left 20px
              font-style normal
              overflow hidden
              white-space:nowrap
              text-overflow ellipsis
            .item_four
              display block
              float right
              width: 50px
              margin-right 30px
              color rgb(153, 153, 153)
              font-style normal
          .left_item_two
            width 791px
            height:50px
            line-height 50px
            padding-left 16px
            padding-right 50px
            font-size 14px
            background-color rgb(252, 252, 252)
            .item_zero
              display block
              float left
              width 10px
              padding-right 20px
              text-align center
              color rgb(153, 153, 153)
              font-style normal
              font-size 14px
            .item_one
              display block
              float left
              width: 380px
              height: 50px
              font-style normal
            .item_two
              display block
              float left
              width: 120px
              height: 50px
              font-style normal
            .item_three
              display: block
              float left
              width: 120px
              height: 50px
              padding-left 20px
              font-style normal
            .item_four
              display block
              float right
              width: 50px
              margin-right 30px
              color rgb(153, 153, 153)
              font-style normal
        .main_right
          width: 290px
          float left
          margin-left 20px
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
