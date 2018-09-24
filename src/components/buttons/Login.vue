<template>
  <button id="loginButton" class="tab-button" v-on:click="setMainToLogin">
    Login
  </button>
</template>
  
<script>
  export default {
    name: 'LoginButton',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      setMainToLogin(){
        this.$store.commit('setMainView', 'login')
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
</style>
