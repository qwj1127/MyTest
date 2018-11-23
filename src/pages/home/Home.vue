<template>
  <home-header></home-header> <!--使用子组件-->
</template>

<script>
import HomeHeader from './components/Header' // 引入子组件，勿忘！！！
export default{
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>

</style>
