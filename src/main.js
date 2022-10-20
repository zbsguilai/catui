import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import catelement from "catelement"
// Vue.use(catelement)
new Vue({
  render: h => h(App),
}).$mount('#app')
