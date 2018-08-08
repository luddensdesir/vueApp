<template>
  <button id="contactButton" class="tab-button" v-on:click="emptyCart">
    Contact
  </button>
</template>
  
<script>
  export default {
    name: 'Contact',
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
  #contactButton{

  }
</style>
