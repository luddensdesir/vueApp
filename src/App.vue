<template>
  <div id="app">
    <!-- <Chart/> -->
    <!-- <h1>{{value}}</h1> -->
    <!--<Slider @sliderAdjusted= "modifyValue($event)" v-bind:position ="sendthis" /></h1> -->
    <Sidebar/>
    <Navbar/>
    <!-- <Map/> -->
    <Checkout/>
    <Munchies @itemToCart = "toCart" />
  </div >
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import Munchies from './components/Munchies'
  import Checkout from './components/Checkout'
  import Map from './components/Map'

  export default {
    name: 'App',
    data(){
      return{
        sendthis: "passtoChild",
        value: '0',
      };
    },
    components: { Navbar, Sidebar, Munchies, Checkout, Map},
    computed: {
      cart(){
        return this.$store.getters.cart;
      }
    },
    methods: {
      toCart: function(var1){
        this.$store.commit('addToCart', var1)
      }
    }
  }
</script>

<style>
#app {
  width: calc(35% + 520px);
  // width: 35%;
  height: 100%;
  margin:auto;
  display:grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 10px;
  // grid-auto-rows: minmax(500px, auto);
}

body{
  height: 100vh;
}

body, html{
  padding: 0px;
  margin: 0px;
  width: 100%;
  background-color: orange;
}


@media(max-width: 820px){
  #app {
    width: 100%;
  }
}
</style>
