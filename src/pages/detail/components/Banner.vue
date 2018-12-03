<template>
<div>
  <router-link
    tag="div"
    to="/"
    class="arrow-icon-wrapper">
    <div class="iconfont arrow-icon">&#xe624;</div>
  </router-link>
  <div class="banner-wrapper" @click="handleBannerClick">
    <img class="banner-img" src='//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg' />
    <div class="banner-info">
      <div class="banner-title">上海迪士尼乐园</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        2
      </div>
    </div>
  </div>
  <common-gallary
    :imgs="imgs"
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg', 'http://img1.qunarzz.com/sight/p0/1704/d7/d75e41fc3bf305d8a3.img.jpg_350x240_384ad477.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .arrow-icon-wrapper
    width: .9rem
    height: .9rem
    position: absolute
    top: .3rem
    left: .3rem
    border-radius: .6rem
    z-index: 1
    background: rgba(0, 0, 0, .8)
    .arrow-icon
      text-align: center
      margin-top: .22rem
      font-size: .44rem
      color: #fff
  .banner-wrapper
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background: green
    .banner-img
      width: 100%
    .banner-info
      display: flex
      width: 100%
      position: absolute
      left: 0
      right: 0
      bottom: 0
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      line-height: .6rem
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        color: #fff
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        font-size: .24rem
        color: #fff
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
