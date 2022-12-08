import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({                     //1. here create a vue app instance
  render: h => h(App),        //3. then find the other el(element(app is attached)). el means if any other element linked with component.
}).$mount('#app')
