<template>
  <div class="updateInfo"> 
    <form id = "personalInfo" class ="signinForm" v-on:submit.stop.prevent="updatePersonalInfo">
      <input type="text" maxlength="50" class="" placeholder="name" name="name">
      <input type="text" maxlength="50" class = "address" placeholder="address" name="address">
      <button type="Submit" class="button btn btn-default">[confirm update]</button>
    </form>
  </div>
</template>

<script> 
  import utils from './scripts/common.js'
  export default {
    name: 'UpdateInfo', 
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
      updatePersonalInfo(ev){
        var formData = utils.formToJson(ev.target)
        this.$store.dispatch('updateAccountInfo', {newUserInfo:formData, headers: utils.getAuthToken()})
      },
    },
    created(){
    }
  }
</script>

<style>
</style>
