import Vue from 'vue'
import App from './App'
import fly from './utils/ajaxfly'
import 'mpvue-weui/src/style/weui.css'

Vue.config.productionTip = false
Vue.prototype.$fly = fly
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    "enablePullDownRefresh": true,
  }
};