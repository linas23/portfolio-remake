import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCarousel from 'vue-carousel';
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import 'materialize-css/dist/js/materialize.min'
// import VueTypedJs from 'vue-typed-js'
// import lightbox from 'lightbox2';
// import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

// Vue.use(lightbox)
// Vue.use(VueTypedJs)
// Vue.use(VueCarousel);
Vue.use(SequentialEntrance);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
