<template>
<div>
  <div class="banner-wrapper" @click="handleBannerClick">
    <img class="banner-img" :src='bannerImg' />
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        {{this.gallaryImgs.length}}
      </div>
    </div>
  </div>
  <common-gallary
    :imgs="gallaryImgs"
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
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
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
  .banner-wrapper
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
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
