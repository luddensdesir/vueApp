<template>
  <button id="registerButton" class="tab-button" v-on:click="setMainToRegister">
    Register
  </button>
</template>
  
<script>
  export default {
    name: 'RegisterButton',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      setMainToRegister(){
        this.$store.commit('setMainView', 'register')
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
</style>
