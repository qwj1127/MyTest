<template>
  <div id="app">
    <!--keep-alive表示如果路由显示的内容已经被加载过一次了，就把加载过的内容保存在内存中，下一次再进这个路由时，无需重新执行mounted函数中的内容（无需重新加载），只需要将内存中保存的内容拿出来展示即可-->
    <!--当使用keep-alive的时候，就会多出activated这个生命周期函数，只要页面重新被渲染，activated就会被执行，这样就可以在activated中增加判断逻辑，判断是否要重新执行异步请求，是否要重新加载路由显示的内容-->
    <keep-alive exclude="Detail">
      <!--router-view：显示的是当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
