<template>
  <div>
    <detail-banner></detail-banner><!--使用子组件-->
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'// 引入子组件，勿忘！！！
import DetailHeader from './components/Header'

export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
