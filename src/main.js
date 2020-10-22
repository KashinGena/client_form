import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./styles/_base.scss"
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.config.devtools = true
Vue.use(Vuelidate)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
