<template>
  <div>
    <home-header></home-header> <!--使用子组件-->
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入子组件，勿忘！！！
import HomeSwiper from './components/Swiper'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
