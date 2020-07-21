import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
