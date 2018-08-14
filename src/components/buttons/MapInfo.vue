<template>
  <button id="mapButton" class="tab-button" v-on:click="getMapData">
    Map
  </button>
</template>
  
<script>
  export default {
    name: 'MapInfo',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      getMapData(){
        this.$store.dispatch('getMapData')
      }
    },
    created(){
    }
  }

</script>

<style scoped> 
  #mapButton{

  }
</style>
