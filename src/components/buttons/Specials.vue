<template>
  <button id="specialsButton" class="tab-button"  v-on:click="getSpecials">
    Specials
  </button>
</template>retrieveSpecialist
  
<script>
  export default {
    name: 'Specials',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: { 
      getSpecials(){
        this.$store.dispatch('retrieveSpeciallist')
      } 
    },
    created(){
    }
  }

</script>

<style scoped> 
  #specialsButton{

  }
</style>
