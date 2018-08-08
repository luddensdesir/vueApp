// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import vueRresource from 'vue-resource'
import Vuex from 'vuex'
import VueStripeCheckout from 'vue-stripe-checkout'
import img8 from './assets/8.jpg'

Vue.config.productionTip = false

const options = {
  key: 'pk_test_TQvyHRdUxoRorhFQOAHRNVdq',
  image: img8,
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

Vue.use(Vuex)
Vue.use(vueRresource)
Vue.use(VueStripeCheckout, options)

function makePrecise (num) {
  var factor = Math.pow(10, 1)
  return Math.round(num * factor) / factor
}

export const store = new Vuex.Store({
  state: {
    cart: {
      total: 0,
      content: []
    },
    specials: {
      meals: [],
      items: []
    },
    menu: {
      items: []
    }
  },
  getters: {
    menu: state => state.menu,
    cart: state => state.cart
  },
  mutations: {
    removeItem: (state, params) => {
      state.cart.content.splice(params.index, 1)
      state.cart.total -= makePrecise(params.item.price)
    },
    addToCart: (state, item) => {
      state.cart.content.push(item)
      state.cart.total += makePrecise(item.price)
    },
    emptyCart: (state, items) => {
      state.cart.content = []
      state.cart.total = 0
    },
    changeValue: state => {
      state.cart.content.forEach(item => {
        item.num = item.num + 15
      })
    },
    updateAllPrices: (state, items) => {
      state.menu.items = items
    },
    updateSpecials: (state, items) => {
      state.specials = items
    }
  },
  actions: {
    retrieveMap: (context, payload) => {
      return Vue.http.get('/getmap')
        .then(function (response) {
          console.log('getMap')
          console.log(response.body)
          // context.commit('updateSpecials', payload)
        })
    },
    retrieveMenu: (context, payload) => {
      return Vue.http.get('/menu')
        .then(function (response) {
          console.log(response.body)
          context.commit('updateSpecials', payload)
        })
    },
    getPastOrders: (context, payload) => {
      return Vue.http.get('users/pastorders', {headers: {token: localStorage.getItem('loginToken')}})
        .then(function (response) {
          console.log(response.body)
          context.commit('updateSpecials', payload)
        })
    },
    retrievePopularOrders: (context, payload) => {
      return Vue.http.get('/popular')
        .then(function (response) {
          console.log(response.body)
          context.commit('updateSpecials', payload)
        })
    },
    retrievePopularMenu: (context) => {
      return Vue.http.get('/menu/popular')
        .then(function (response) {
          console.log(response.body)
          // context.commit('updateAllPrices', response.body)
        })
    },
    retrieveMainMenu: (context) => {
      return Vue.http.get('/menu/all')
        .then(function (response) {
          console.log(response.body)
          context.commit('updateAllPrices', response.body)
        })
    },
    retrieveSpeciallist: (context, payload) => {
      return Vue.http.get('menu/specials')
        .then(function (response) {
          console.log(response.body)
          // context.commit('')
        })
    },
    removeFromCart: (context, payload) => {
      context.commit('removeItem', payload)
    },
    changeValue: (context, payload) => {
      // $http doesn't exist here for some reason
      // return Vue.http.get('http://localhost:3000/api/')
      //   .then(function (response) {
      //     // console.log(response.body)
      //   })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  components: { App },
  template: '<App/>'
})
