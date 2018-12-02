<template>
  <div>
    <div class="search-wrapper">
      <input class="search-input"
             v-model="content"
             type="text"
             placeholder="输入城市名或拼音" />
    </div>
    <div class="search-result"
         v-show="resultShow"
         ref="wrapper">
      <ul>
        <li class="search-item border-bottom"
             v-for="item of list/*resultItem*/"
             :key="item.id"
             @click="handleCityClick(item.name)"
             >
        {{item.name}}
         </li>
         <li class="search-item border-bottom"
            v-show="noSelectCity">
          未所搜到相关城市
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      content: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    content () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.includes(this.content) ||
                value.spell.includes(this.content)) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    resultShow () {
      if (this.content) {
        return true
      }
    },
    noSelectCity () {
      if (this.content) {
        if (this.list.length === 0) {
          return true
        }
      }
    }
    // resultItem () {
    /* 自己研究：得出结论，写在computed中虽然也可以实现功能。但是，由于computed就是用来返回计算后的值得，是需要马上得到的,而不是要等一段时间才能得到的，所以无法使用setTimeout节流函数，所以性能开销较大，故一般需要异步操作及开销较大的操作时，使用watch是比较合适的 */
    //   if (this.content) {
    //     const showCities = []
    //     for (let i in this.cities) {
    //       this.cities[i].forEach((value) => {
    //         if (value.name.includes(this.content) ||
    //           value.spell.includes(this.content)) {
    //           showCities.push(value)
    //         }
    //       })
    //     }
    //     if (showCities.length > 0) {
    //       console.log(showCities)
    //       return showCities
    //     }
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search-wrapper
    display: flex
    height: .72rem
    background: $bgColor
    .search-input
      flex:1
      height: .62rem
      line-height: .62rem
      margin: 0 .1rem
      border-radius: .06rem
      color: #666
      text-align: center
      padding: 0 .1rem
  .search-result
    overflow: hidden
    position: absolute
    top: 1.58rem
    bottom: 0
    z-index: 1
    width: 100%
    background: #fff
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
</style>
