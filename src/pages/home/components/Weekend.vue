<template>
  <div class="HomeWeekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of weekendList"
          :key="item.id"
          class="week-content"
      >
        <div class="week-img-wrapper">
          <img class="week-img" :src="item.imgUrl" />
        </div>
        <div class="week-info">
          <p class="week-title">{{item.title}}</p>
          <p class="week-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{'id': '0001', 'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg', 'title': '上海必游TOP10', 'desc': '中西合璧，现代和传统各有各的精彩'}, {'id': '0002', 'imgUrl': 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg', 'title': '亲子时光TOP10', 'desc': '走进自然或玩转乐园，感知大千世界'}, {'id': '0003', 'imgUrl': 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg', 'title': '上海城市观光', 'desc': '来这里寻找你所认识的上海'}, {'id': '0004', 'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg', 'title': '情迷博物馆', 'desc': '穿梭时光岁月寻找答案'}, {'id': '0005', 'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/6f/2711e071838590.jpg_r_640x214_8f1ad9a1.jpg', 'title': '戏水清凉一夏', 'desc': '夏日戏水，玩“乐”无穷'}]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    background: #eee
    margin-top: .2rem
    text-indent:.2rem
  .week-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.4%
    .week-img
      width: 100%
  .week-info
    padding: .1rem
    .week-title
      line-height: .54rem
      font-size: .28rem
      ellipsis()
    .week-desc
      line-height: .4rem
      color: #ccc
      font-size: .25rem
      ellipsis()
</style>
