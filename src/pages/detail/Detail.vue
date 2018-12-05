<template>
  <div>
    <detail-banner></detail-banner><!--使用子组件-->
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'// 引入子组件，勿忘！！！
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        id: '01',
        title: '秦胖胖',
        expand: true,
        child: [{
          id: '011',
          title: '越来越瘦',
          expand: true,
          child: [{
            id: '0111',
            title: '瘦的不成功',
            expand: true
          }]
        }, {
          id: '012',
          title: '越来越聪明',
          expand: true,
          child: [{
            id: '0121',
            title: '聪明的不成功',
            expand: true
          }]
        }, {
          id: '013',
          title: '越来越机灵',
          expand: true,
          child: [{
            id: '0131',
            title: '机灵的不成功',
            expand: true
          }]
        }]
      }, {
        id: '02',
        title: '黄胖胖',
        expand: true,
        child: [{
          id: '021',
          title: '越来越胖',
          expand: true,
          child: [{
            id: '0211',
            title: '胖的不成功',
            expand: true
          }]
        }, {
          id: '022',
          title: '越来越笨',
          expand: true,
          child: [{
            id: '0221',
            title: '笨的不成功',
            expand: true
          }]
        }, {
          id: '023',
          title: '越来越呆',
          expand: true,
          child: [{
            id: '0231',
            title: '呆的不成功',
            expand: true
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
