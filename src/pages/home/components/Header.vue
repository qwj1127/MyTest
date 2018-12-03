<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
       <span class="iconfont back-search">&#xe632;</span>
        输入城市景点游玩主题
    </div>
    <router-link tag="div"
                 class="header-right"
                 to="/city">
      {{this.$store.state.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
          display: block
          text-align: center
          font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      height: .64rem
      line-height: .64rem
      margin-top:.12rem
      margin-left:.2rem
      color: #ccc
      .back-search
        margin-left: .2rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
