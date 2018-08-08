<template>
  <div id="nav">
    <Menu/>
    <Specials/>
    <Popular/>
    <About/>
    <Map/>
    <Contact/>
    
    <ul class = "cart">
      <li>{{cartItems.length}}</li>
      <li>{{total}}</li>
    </ul> 

  </div>
</template>

<script>
  import{mapActions} from 'vuex'
  import Menu from './buttons/Menu'
  import Specials from './buttons/Specials'
  import Popular from './buttons/Popular'
  import About from './buttons/About'
  import Map from './buttons/Map'
  import Contact from './buttons/Contact'

  export default {
    name: 'Navbar',
    components: {
      Menu,
      Specials,
      Popular,
      About,
      Map,
      Contact
    },
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
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
        // 'retrieveMenu'
        'retrieveMap'
      ])
    },
    created(){
      // console.log('updateVal')
    }
  }
</script>

<style>

.cart{
  /* text-align: center; */
}

ul{
  padding: 0px;
  width: 95%;
  margin-right: 0px;
  margin: auto;
}

.signin{
  float: right;
  position: relative;
  right: 0%;
}

#nav li{
  list-style: none;
  /* display:inline; */
}

#nav {
  background-color: green;
  grid-column-start: 1;
  grid-column-end:   11;
  grid-row-start:    1;
  grid-row-end:      2;
  width: 100%;
}  
</style>
