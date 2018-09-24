<template>
  <div class="nav col1">
    <Menu/>
    <Specials/>
    <Popular/>
    <MapInfo/>
    <About/>
    <Contact/> 
    <ul class = "cart">
      <li><p class = "totalPrice" >Total:</p> {{total}}</li>
    </ul> 

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import Menu from './buttons/Menu'
  import Specials from './buttons/Specials'
  import Popular from './buttons/Popular'
  import About from './buttons/About'
  import MapInfo from './buttons/MapInfo'
  import Contact from './buttons/Contact'

  export default {
    name: 'Navbar',
    components: {
      Menu,
      Specials,
      Popular,
      About,
      MapInfo,
      Contact
    },
    data(){
      return{
      };
    },
    computed:{
      cartItems(){
        return this.$store.getters.cart.content;
      },
      total(){
        return this.$store.getters.cart.total;
      }
    },
    methods: {
      ...mapActions([
        'retrieveMap'
      ])
    },
    created(){
    }
  }
</script>

<style  lang="scss" scoped>
  .nav {
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    1;
    grid-row-end:      2;
    width: 100%;
    border-bottom: 3px solid black;
    padding: 25px;
    box-sizing: border-box;
  }  

  .cart{
    width: 25%;
    float: right;
    p {
      margin: 0px;
    }

    li{
      float: right;
    }
  }

  ul{
    padding: 0px;
    width: auto;
    margin-right: 0px;
    margin: auto;
    list-style: none;
    float: left;
  }

  .signin{
    float: right;
    position: relative;
    right: 0%;
  }
   
  #nav li{
    list-style: none;
  }
</style>
