<template>
  <button id="emptyButton" class="tab-button" v-on:click="emptyCart">
    Empty Cart
  </button>
</template>
  
<script>
  export default {
    name: 'Empty',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      emptyCart(){
        this.$store.commit('emptyCart')
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
  #emptyButton{

  }
</style>
