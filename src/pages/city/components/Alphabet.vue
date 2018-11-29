<template>
  <ul class="list">
    <li class="item"
        v-for="(objValue,objKey) of cities"
        :key="objKey">
    {{objKey}}</li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
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
