<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner><!--使用子组件-->
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'// 引入子组件，勿忘！！！
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getInfoSucc()
  },
  methods: {
    getInfoSucc () {
      axios.get('/api/detail.json', {
        /* 发送ajax请求时，根据不同的动态路由参数返回不同的数据展示不同的页面 */
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        const data = res.data
        if (res && res.data) {
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      })
    }
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
