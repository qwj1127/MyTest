<template>
<div>
  <div class="item"
       v-for="(item, index) of Clist"
       :key="index"
  >
    <div class="item-title" @click="handleClick(item.id)">
      <span class="item-title-icon"></span>
      {{item.title}}
    </div>
    <div class="item-child"
         v-if="item.child"
         v-show="item.expand"
    >
      <detail-list :list="item.child">
    </detail-list>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      Clist: this.list
    }
  },
  methods: {
    handleClick (id) {
      // 传入点击标题的id
      // console.log(id)
      // console.log(this.Clist)
      this.list.forEach((val) => {
        // 循环所有数据，找出所有数据中的id与传入的id匹配的那一项，
        // 将那一项的expand取反，在递归组件中判断v-show="item.expand"即可
        // console.log(val)
        if (id === val.id) {
          // console.log(val)
          val.expand = !val.expand
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item-title
    line-height: .8rem
    font-size: .25rem
    padding: 0 .2rem
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      //行内块元素：设置了inline-block属性的元素既拥有了block元素可以设置width和height的特性，又保持了inline元素不换行的特性。
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-child
    padding: 0 .3rem
</style>
