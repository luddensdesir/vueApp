<template>
  <button id="addressButton" class="tab-button" v-on:click="updateAddress">
    Account
  </button>
</template>
  
<script>
  export default {
    name: 'Account',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {  
      updateAddress(){
        this.$store.dispatch('updateAddress')
      }  
    },
    created(){
    }
  }

</script>

<style scoped> 
  #addressButton{

  }
</style>
