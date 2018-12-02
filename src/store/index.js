import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // Vuex是一个插件，在vue里使用一个插件都是用Vue.use(XXX)来使用的

/* 拆到state.js中去 */
// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  state, /* 用于存放全局公用的一些数据 */
  mutations,
  /* 拆到state.js中去 start */
  // state: {
  //   city: defaultCity
  // },
  /* 拆到state.js中去 end */

  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },

  /* 拆到state.js中去 start */
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch(e) {}
  //   }
  // },
  /* 拆到state.js中去 end */

  /* getters的作用：
  当需要根据state里的数据，算出一些新的数据的时候，我们就可以借助getters来提供新的数据，
  这样可以避免数据的冗余
  */
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
