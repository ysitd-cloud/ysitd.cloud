import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
