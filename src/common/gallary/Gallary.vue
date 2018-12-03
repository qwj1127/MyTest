<template>
  <div class="container" @click="handleBackClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
            v-for="(item, index) of imgs"
            :key="index">
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () { // 如果父组件没有传imgs过来，这里写一个默认值default，必须使一个函数
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 以下这两个属性的含义:当前swiper插件只要监听到父级元素和元素本身发生了DOM结构的变化，就自动的自我刷新一次。从而解决了DOM结构改变所导致的swiper无法正常使用问题。
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleBackClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #000
    .wrapper
      height: 0
      padding-bottom: 66.5%
      background: red
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
