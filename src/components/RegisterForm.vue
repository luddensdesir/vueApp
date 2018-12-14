<template>
  <div id = "registerForm">
    <div>
      <form class ="signinForm" v-on:submit.stop.prevent="submitRegistration">
        <input type="text" maxlength="50" class="" placeholder="[name]" name="name">
        <input type="text" maxlength="16" class="" placeholder="[username]" name="username">
        <input type="email"  class="" placeholder="[email]" name="email">
        <input type="password" maxlength="32" class="" placeholder="[password]" name="password">
        <input type="password" maxlength="32" class="" placeholder="[password]" name="password2">
        <button type="Submit" class="button btn btn-default">[register]</button>
      </form>
    </div>
  </div>
</template>

<!--<script lang ="ts"> -->
<script>
  export default {
    name: 'registerForm', 
    data(){
      return{
      };
    },
    computed:{
      cartItems:function(){
        return this.$store.getters.cart.content;
      },
      total:function(){
        return this.$store.getters.cart.total;
      }
    },
    methods: {
    },
    created(){
    }
  }
</script>

<style lang ="scss">
  #registerForm{
    background-color: white;
    width: 100%;
    height: 100%;
    text-align: center;
    div{
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      margin: 0 auto;
      position: relative;
      top: 50%;
      /* transform: translate(0%, -50%); */
    }
  }
</style>
