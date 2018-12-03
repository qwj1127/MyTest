<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <!--to前加冒号，动态绑定路由地址-->
      <router-link tag="li"
                   :to="'/detail/' + item.id"
                   v-for="item of this.recommendList"
                   :key="item.id"
                   class="rec-content border-bottom"
      >
        <img class="rec-img" :src="item.imgUrl" />
        <div class="rec-info">
          <p class="rec-title">{{item.title}}</p>
          <p class="rec-desc">{{item.desc}}</p>
          <button class="rec-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array
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
