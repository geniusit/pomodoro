import Vue from 'vue'
import App from './App.vue'
import VueNoiseGeneratorPlugin from './plugins/VueNoiseGeneratorPlugin'

Vue.use(VueNoiseGeneratorPlugin)

Vue.config.productionTip = false

Vue.filter('lowercase', (key) => {
  return key.toLowerCase()
})

Vue.filter('leftpad', (value) => {
  if(value >= 10) {
    return value
  }
  return '0' + value
})

Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})

Vue.filter('addspace', (value) => {
  return value + ' '
})

new Vue({
  render: h => h(App),
}).$mount('#app')