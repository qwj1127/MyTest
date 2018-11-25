<template>
  <div>
    <home-header></home-header> <!--使用子组件-->
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入子组件，勿忘！！！
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default{
  name: 'Home',
  components: {
    HomeHeader, // 注册子组件
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
