<template>
  <button id="menuButon" class="tab-button" v-on:click="getMenu">
    Menu
  </button>
</template>
  
<script>
  export default {
    name: 'Menu',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      getMenu(){
        this.$store.dispatch('retrieveMainMenu')
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
  #menuButon{

  }
</style>
