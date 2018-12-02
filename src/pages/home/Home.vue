<template>
  <div>
    <home-header></home-header> <!--使用子组件-->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 引入子组件，勿忘！！！
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default{
  name: 'Home',
  components: {
    HomeHeader, // 注册子组件
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastShowCity: '', // 临时缓存变量，用于保存之前城市是什么
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    console.log('mounted')
    this.lastShowCity = this.$store.state.city
    this.getHomeInfo()
  },
  activated () {
    console.log('activated')
    if (this.lastShowCity !== this.$store.state.city) {
      this.lastShowCity = this.$store.state.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then((res) => {
          res = res.data
          if (res && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
    }
  }
}
</script>

<style>

</style>
