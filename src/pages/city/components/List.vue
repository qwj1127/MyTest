<template>
  <div class="list" ref="wrapper">
    <div><!--加这一层div的目的：符合better-scroll对HTML的结构要求，详见github上better-scroll的文档-->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                  v-for="item of hotCities"
                  :key="item.id"
                  @click="handleCityClick(item.name)">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area"
            v-for="(objValue,objKey) of cities"
            :key="objKey"
            :ref="objKey">
        <div class="title border-topbottom">{{objKey}}</div>
        <ul class="item-list">
          <li class="item border-bottom"
              v-for="item of objValue"
              :key="item.id"
              @click="handleCityClick(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter (newValue, oldValue) {
      if (this.letter) {
        // vm.$refs是一个对象，持有所有已注册过ref的子元素或子组件
        // console.log(this.$refs[this.letter][0])
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    // 为什么这里需要绝对定位
    // 因为使用better-scroll就需要在一个固定高度上做无限滚动，利用绝对定位设置top和bottom，可以把这个高度定下来
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
//    background: red
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .2rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    line-height: .76rem
    padding-left: .2rem
</style>
