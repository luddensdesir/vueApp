// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueStripeCheckout from 'vue-stripe-checkout'
// import img8 from './src/assets/8.jpg'
import store from './store';

Vue.config.productionTip = false
  
const stripeOptions = {
  key: 'pk_test_TQvyHRdUxoRorhFQOAHRNVdq',
  // image: img8,
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

Vue.use(Vuex)
Vue.use(VueStripeCheckout, stripeOptions)
Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  store,
  render: (h) => h(App),
  // template: '<App/>'
}).$mount('#app');
