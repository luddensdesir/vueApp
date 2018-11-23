// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import vueRresource from 'vue-resource'
import Vuex from 'vuex'
import VueStripeCheckout from 'vue-stripe-checkout'
import img8 from './assets/8.jpg'
import utils from './scripts/common.js'

Vue.config.productionTip = false

const stripeOptions = {
  key: 'pk_test_TQvyHRdUxoRorhFQOAHRNVdq',
  image: img8,
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

Vue.use(Vuex)
Vue.use(vueRresource)
Vue.use(VueStripeCheckout, stripeOptions)

function makePrecise (num) {
  return parseFloat(num.toFixed(2))
}

export const store = new Vuex.Store({
  state: {
    cart: {
      total: 0,
      content: []
    },
    selected: {
      // menu: true,
      menu: true,
      checkout: false,
      register: false,
      login: false,
      map: false,
      update: false
      // specials: false,
      // popular: false,
      // map: false,
      // about: false,
      // contact: false
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
    selection: state => state.selected,
    menu: state => state.menu,
    cart: state => state.cart
  },
  mutations: {
    setMainView: (state, params) => {
      state.selected = utils.switchSelectedTab(state.selected, params)
    },
    setupMap: (state, params) => {
      state.selected = utils.switchSelectedTab(state.selected, params)
    },
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
      state.selected = utils.switchSelectedTab(state.selected, 'menu')
    },
    updateSpecials: (state, items) => {
      state.selected = utils.switchSelectedTab(state.selected, 'menu')
      state.specials = items
    }
  },
  actions: {
    setMainView: (context, payload) => {
      context.commit('setMainView', payload)
    },
    emptyCart: (context, payload) => {
      context.commit('emptyCart', payload)
    },
    updateAddress: (context, payload) => {
      context.commit('emptyCart', payload)
    },
    // setMainView: (context, payload) => {
    //   context.commit('setMainView', payload)
    // },
    // setMainView: (context, payload) => {
    //   context.commit('setMainView', payload)
    // },
    // setMainView: (context, payload) => {
    //   context.commit('setMainView', payload)
    // },
    getMapData: (context, payload) => {
      return Vue.http.get('/getmap')
        .then(function (response) {
          console.log('getMap')
          console.log(response.body)
          context.commit('setupMap', payload)
        })
    },
    updateAccountInfo: (context, payload) => {
      console.log('confirm update')
      console.log(payload)
      return Vue.http.get('users/update', payload)
        .then(function (response) {
          console.log(response.body)
          context.commit('confirmInfoUpdate', response.body)
        })
    },
    retrieveMenu: (context, payload) => {
      return Vue.http.get('/menu')
        .then(function (response) {
          console.log(response.body)
          console.log('retrieveMenu')
          context.commit('updateSpecials', payload)
        })
    },
    getPastOrders: (context, payload) => {
      return Vue.http.get('users/pastorders', {headers: utils.getAuthToken()})
        .then(function (response) {
          console.log(response.body)
          console.log('getPastOrders')
          context.commit('updateSpecials', payload)
        })
    },
    retrievePopularOrders: (context, payload) => {
      return Vue.http.get('/popular')
        .then(function (response) {
          console.log(response.body)
          console.log('retrievePopularOrders')
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
          console.log('retrieveMainMenu')
          console.log(response.body)
          context.commit('updateAllPrices', response.body)
        })
    },
    retrieveSpeciallist: (context, payload) => {
      return Vue.http.get('menu/specials')
        .then(function (response) {
          console.log('retrieveSpeciallist')
          console.log(response.body)
          // context.commit('')
        })
    },
    removeFromCart: (context, payload) => {
      context.commit('removeItem', payload)
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
