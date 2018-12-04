<template>
<div>
  <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs">
    <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
    <div class="header-title"
         v-show="showHeaderTitle"
         :style="opacityStyle"
    >
      景点详情
      <router-link
        tag="div"
        to="/"
        class="header-title-back iconfont"
      >
      &#xe624;
      </router-link>
  </div>
</div>
</template>

<script>
export default{
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  // 当页面重新被显示的时候，activated会被重新执行
  activated () {
    // element.addEventListener() 用于向指定元素添加(绑定)事件
    // 给“滚动scroll”这个动作绑定一个handleScroll事件
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被替换成其他页面的时候，deactivated会被执行
  deactivated () {
    // 为全局事件scroll解绑
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      console.log(document.documentElement.scrollTop)
    }
  },
  computed: {
    showHeaderTitle () {
      return !this.showAbs
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    width: .8rem
    height: .8rem
    line-height: .8rem
    position: absolute
    top: .2rem
    left: .2rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      font-size: .4rem
      color: #fff
  .header-title
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    font-size: .32rem
    text-align: center
    background: $bgColor
    .header-title-back
      position: absolute
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>
