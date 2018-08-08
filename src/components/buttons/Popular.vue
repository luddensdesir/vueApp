<template>
  <button id="popularButton" class="tab-button" v-on:click="getPopular">
    Popular
  </button>
</template>
  
<script>
  export default {
    name: 'Popular',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      getPopular(){
        this.$store.dispatch('retrievePopularMenu')
      }
    },
    created(){
    }
  }

</script>

<style scoped> 
  #popularButton{

  }
</style>
