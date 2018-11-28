<template>
  <div class="search-wrapper">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default{
  name: 'CitySearch'
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
    // height: .72rem
    // padding: 0 .1rem
    // background: $bgColor
    // .search-input
    //   width: 100%
    //   height: .62rem
    //   line-height: .62rem
    //   border-radius: .06rem
    //   color: #666
    //   text-align: center
</style>
