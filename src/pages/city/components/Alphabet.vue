<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="hanleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
    {{item}}</li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null // 优化2
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 优化1
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    hanleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 优化2：通过函数节流的方式，减少性能上的消耗,设定一个定时器，16毫秒后执行定时器内方法，若16毫秒内又触发滚动，则清除上一个定时器，再重新生成一个定时器
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 优化1： 每次触发滚动时都会计算一遍startY，消耗性能，所以把startY放入updated生命周期函数中
          // const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    width: .4rem
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
