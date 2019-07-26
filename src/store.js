import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false // 是否登录
  },
  mutations: {
    getisLogin: function (state, val) {
      state.isLogin = val.status
    }
  },
  actions: {

  }
})
