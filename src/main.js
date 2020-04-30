import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import VueLazyComponent from '@xunlei/vue-lazy-component'
import 'element-ui/lib/theme-chalk/index.css'
import '@babel/polyfill'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
