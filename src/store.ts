import Vue from 'vue';
import Vuex from 'vuex';
// import utils from '@/scripts/common.js'
import utils from './scripts/utils.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
// electron builder?

function makePrecise (num: number) {
  return parseFloat(num.toFixed(2));
}

export default new Vuex.Store({
  state: {
    cart: {
      total: 0,
      content: [],
    },
    selected: {
      // menu: true,
      menu: true,
      checkout: false,
      register: false,
      login: false,
      map: false,
      update: false,
      // specials: false,
      // popular: false,
      // map: false,
      // about: false,
      // contact: false
    },
    specials: {
      meals: [],
      items: [],
    },
    menu: {
      items: [],
    }
  },
  getters: {
    selection: state => state.selected,
    menu: state => state.menu,
    cart: state => state.cart,
  },
  mutations: {
    setMainView: (state, params) => {
      state.selected = utils.switchSelectedTab(state.selected, params);
    },
    setupMap: (state, params) => {
      state.selected = utils.switchSelectedTab(state.selected, params);
    },
    removeItem: (state, params) => {
      state.cart.content.splice(params.index, 1);
      state.cart.total -= makePrecise(params.item.price);
    },
    addToCart: (state, item) => {
      state.cart.content.push(item);
      state.cart.total += makePrecise(item.price);
    },
    emptyCart: (state, items) => {
      state.cart.content = [];
      state.cart.total = 0;
    },
    changeValue: state => {
      state.cart.content.forEach(item => {
        item.num = item.num + 15;
      })
    },
    updateAllPrices: (state, items) => {
      state.menu.items = items;
      state.selected = utils.switchSelectedTab(state.selected, 'menu');
    },
    updateSpecials: (state, items) => {
      state.selected = utils.switchSelectedTab(state.selected, 'menu');
      state.specials = items;
    }
  },
  actions: {
    setMainView: (context, payload) => {
      context.commit('setMainView', payload);
    },
    emptyCart: (context, payload) => {
      context.commit('emptyCart', payload);
    },
    updateAddress: (context, payload) => {
      context.commit('emptyCart', payload);
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
      return Vue.axios.get('/getmap')
        .then(function (response) {
          console.log('getMap');
          console.log(response.data);
          context.commit('setupMap', payload);
        });
    },
    updateAccountInfo: (context, payload) => {
      console.log('confirm update');
      console.log(payload);
      return Vue.axios.get('users/update', payload)
        .then(function (response) {
          console.log(response.data);
          context.commit('confirmInfoUpdate', response.data);
        });
    },
    retrieveMenu: (context, payload) => {
      return Vue.axios.get('/menu')
        .then(function (response) {
          console.log(response.data);
          console.log('retrieveMenu');
          context.commit('updateSpecials', payload);
        });
    },
    getPastOrders: (context, payload) => {
      return Vue.axios.get('users/pastorders', {headers: utils.getAuthToken()})
        .then(function (response) {
          console.log(response.data);
          console.log('getPastOrders');
          context.commit('updateSpecials', payload);
        });
    },
    retrievePopularOrders: (context, payload) => {
      return Vue.axios.get('/popular')
        .then(function (response) {
          console.log(response.data);
          console.log('retrievePopularOrders');
          context.commit('updateSpecials', payload);
        });
    },
    retrievePopularMenu: (context) => {
      return Vue.axios.get('/menu/popular')
        .then(function (response) {
          console.log(response.data);
          // context.commit('updateAllPrices', response.data)
        });
    },
    retrieveMainMenu: (context) => {
      return Vue.axios.get('/menu/all')
        .then(function (response) {
          console.log('retrieveMainMenu');
          console.log(response.data);
          context.commit('updateAllPrices', response.data);
        });
    },
    retrieveSpeciallist: (context, payload) => {
      return Vue.axios.get('menu/specials')
        .then(function (response) {
          console.log('retrieveSpeciallist');
          console.log(response.data);
          // context.commit('')
        });
    },
    removeFromCart: (context, payload) => {
      context.commit('removeItem', payload);
    },
  },
});
