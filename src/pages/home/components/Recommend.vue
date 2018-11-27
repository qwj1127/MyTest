<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList"
          :key="item.id"
          class="rec-content border-bottom"
      >
        <img class="rec-img" :src="item.imgUrl" />
        <div class="rec-info">
          <p class="rec-title">{{item.title}}</p>
          <p class="rec-desc">{{item.desc}}</p>
          <button class="rec-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{'id': '0001', 'imgUrl': 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg', 'title': '上海迪士尼乐园', 'desc': '今年夏天，开启你奇妙神奇的童话之旅'}, {'id': '0002', 'imgUrl': 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg', 'title': '上海海洋水族馆', 'desc': '穿越世界，来一次终生难忘的海洋之旅'}, {'id': '0003', 'imgUrl': 'http://img1.qunarzz.com/sight/p0/1512/b5/b5be74400df235aa90.water.jpg_200x200_192ddb7f.jpg', 'title': '环球金融中心观光厅', 'desc': '来上海登三高，眺望魔都霓虹闪烁'}, {'id': '0004', 'imgUrl': 'http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg', 'title': '碧海金沙水上乐园', 'desc': '阳光、海水、沙滩，今年夏天我们约吗'}, {'id': '0005', 'imgUrl': 'http://img1.qunarzz.com/sight/p0/1603/b3/b3d33bcf9771d81090.water.jpg_200x200_a48a7066.jpg', 'title': '上海乐高探索中心', 'desc': '难忘刺激的乐高工厂之旅'}]
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
  .rec-content
    display: flex
    overflow: hidden
    height: 1.9rem
    .rec-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .rec-info
      padding: .1rem
      min-width: 0
      .rec-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .rec-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .rec-button
        margin-top: .16rem
        line-height: .44rem
        color: #fff
        padding: 0 .2rem
        background: #ff9300
        border-radius: .1rem
</style>
