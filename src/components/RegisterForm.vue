<template>
  <form id = "submitForm" class ="signinForm" v-on:submit.stop.prevent="submitRegistration">
    <input type="text" maxlength="50" class="" placeholder="[name]" name="name">
    <input type="text" maxlength="16" class="" placeholder="[username]" name="username">
    <input type="email"  class="" placeholder="[email]" name="email">
    <input type="password" maxlength="32" class="" placeholder="[password]" name="password">
    <input type="password" maxlength="32" class="" placeholder="[password]" name="password2">
    <button type="Submit" class="button btn btn-default">[register]</button>
  </form>
</template>

<script> 
  export default {
    name: 'RegisterForm', 
    data(){
      return{
      };
    },
    computed:{
      cartItems(){
        return this.$store.getters.cart.content;
      },
      total(){
        return this.$store.getters.cart.total;
      }
    },
    methods: {
    },
    created(){
    }
  }
</script>

<style>
</style>
