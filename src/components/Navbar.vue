<template>
  <div class="nav col1">
    <GenButton :name="'Menu'" :func="'retrieveMainMenu'"/>
    <GenButton :name="'Specials'" :func="'retrieveSpeciallist'" />
    <GenButton :name="'Popular'" :func="'retrievePopularMenu'"/>
    <GenButton :name="'MapInfo'" :func="'getMapData'" :param="'map'"/>
    <GenButton :name="'About'" :func="'placeholder'"/>
    <GenButton :name="'Contact'" :func="'placeholder'"/>
    <div  class = "cart">
      <ul class = "">
        <li><p class = "totalPrice" >Total:</p> {{total}}</li>
      </ul> 
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import GenButton from './buttons/genButton'

  export default {
    name: 'Navbar',
    components: {
      GenButton
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

  button:hover{
    padding-left: 15px;
    padding-right: 15px;
  }

  .cart{
    width: 25%;
    float: right;
    p {
      margin: 0px;
    }

    ul{
      width: auto;
      float: right;
      transition: all 0.5s ease;
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
