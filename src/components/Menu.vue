<template>
  <div class ="innerVert navContainer col1">
    <!-- padding is messed up. it needs to perfectly fit at all times
    never wrap to new lines unless that behavior is defined -->
    <div id = "menuButtons" class = "navbuttons">
      <GenButton :name="'Menu'" :func="'retrieveMainMenu'"/>
      <GenButton :name="'Specials'" :func="'retrieveSpeciallist'" />
      <GenButton :name="'Popular'" :func="'retrievePopularMenu'"/>
      <GenButton :name="'MapInfo'" :func="'getMapData'" :param="'map'"/>
      <GenButton :name="'About'" :func="'placeholder'"/>
      <GenButton :name="'Contact'" :func="'placeholder'"/>
    </div>
    <div  class = "totalCart">
        <p class = "totalPrice" >Total:</p> {{total}}
    </div>
  </div>
</template>

<!--<script lang ="ts"> -->
<script>
  import {mapActions} from 'vuex'
  import GenButton from './buttons/genButton.vue'

  export default {
    name: 'Menu',
    // props: ['dir'],
    components: {
      GenButton
    },
    data(){
      return{
      };
    },
    computed:{
      cartItems:function(){
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

<style lang="scss">

</style>
