<template>
  <div>
    <detail-banner></detail-banner><!--使用子组件-->
  </div>
</template>

<script>
import DetailBanner from './components/Banner'// 引入子组件，勿忘！！！

export default{
  name: 'Detail',
  components: {
    DetailBanner
  }
}
</script>

<style>

</style>
