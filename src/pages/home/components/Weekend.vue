<template>
  <div class="HomeWeekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of this.weekendList"
          :key="item.id"
          class="week-content"
      >
        <div class="week-img-wrapper">
          <img class="week-img" :src="item.imgUrl" />
        </div>
        <div class="week-info">
          <p class="week-title">{{item.title}}</p>
          <p class="week-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    background: #eee
    text-indent:.2rem
  .week-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .week-img
      width: 100%
  .week-info
    padding: .1rem
    .week-title
      line-height: .54rem
      font-size: .28rem
      ellipsis()
    .week-desc
      line-height: .4rem
      color: #ccc
      font-size: .25rem
      ellipsis()
</style>
