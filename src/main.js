import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueSelectImage from 'vue-select-image'

require('vue-select-image/dist/vue-select-image.css')

Vue.config.productionTip = false
Vue.use(VueSelectImage);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
