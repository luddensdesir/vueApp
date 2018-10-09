<template>
  <div id = "updateInfo" >
    <div>
      <form class ="signinForm" v-on:submit.stop.prevent="updatePersonalInfo">
        <input type="text" maxlength="50" class="" placeholder="name" name="name">
        <input type="text" maxlength="50" class = "address" placeholder="address" name="address">
        <button type="Submit" class="button btn btn-default">[confirm update]</button>
      </form>
    </div>
  </div>
</template>

<script> 
  import utils from '../scripts/common.js'
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


<style lang ="scss">
  #updateInfo{
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
