import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/request'
import filters from './assets/js/filter'
import commons from './assets/js/common'
Vue.config.productionTip = false
// 全局导入过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 定义vue全局变量
Vue.prototype.$api = api // API请求
Vue.prototype.$commons = commons
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
