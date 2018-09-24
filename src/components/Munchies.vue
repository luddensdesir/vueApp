<template>
  <keep-alive> 
    <div class="center col5">
      <Checkout v-if="checkingOut" />
      <UpdateInfo v-if="updatingInfo" />
      <LoginForm  v-if="notLoggedIn" />
      <RegisterForm  v-if="notRegistered" />
      <Main  v-if="viewingMenu" />
    </div>
  </keep-alive>
</template>

<script>
  import utils from '../scripts/common.js'
  import UpdateInfo from './UpdateInfo'
  import LoginForm from './LoginForm'
  import RegisterForm from './RegisterForm'
  import Main from './Main'
  import Checkout from './Checkout'

  export default {
    name: 'Munchies',
    components: { UpdateInfo, Checkout, RegisterForm , LoginForm, Main },
    computed: {
        checkingOut(){
          var val = this.$store.getters.selection
          return val['checkout'];
        },
        notRegistered(){
          var val = this.$store.getters.selection
          return val['register'];
        },
        notLoggedIn(){
          var val = this.$store.getters.selection
          return val['login'];
        },
        viewingMenu(){
          var val = this.$store.getters.selection
          return val['menu'];
        },
        updatingInfo(){
          var val = this.$store.getters.selection
          return val['update'];
        }
    },
  }

</script>
 
<style lang ="scss">

  .item{ 
    height: auto;
    text-align: left;
    padding: 0;
    width: 100%;
    float: right;
    height: 200px;
    position: relative;
    /* padding: 15px; */
    /* box-sizing: border-box; */
    /* background-color: red; */
    border-top: 1px solid #C63B41;
    border-bottom: 1px solid #C63B41;
    /* background-color: rgb(230, 226, 193); */
    margin-top: 5px;
    margin-bottom: 5px;
    overflow: hidden;
  }

  .item:last-child {
    margin-bottom: 0px;
  }
  .item:nth-child(1) {
    margin-top: 0px;
  }
  
  .item:nth-child(even) {
    /* background-color: red; */
    float: left;
    text-align: right;
  }

  .item:nth-child(even) .purchase{
    float: left;
    left: 0%;
  }

  body{
    overflow: hidden;
  }

  .anim{
    -webkit-transition: all .5s; 
      -moz-transition: all .5s;
        -o-transition: all .5s;
            transition: all .5s;  
  }

  .address{
    width:100%;
  }

  .signinForm{
  }

  img{
    height: auto;
    float: right;
    right: 0%;
    width: 80%;
  }

  .item:nth-child(even) img{
    float: left;
    left: 0%;
  }
  @media(max-width: 840px){
    img{
      height: auto;
      width: 100%;
    }    
  }

  @media(max-width: 640px){
    img{
      /* height: auto; */
      /* width: 100%; */
    } 
    .center {
      grid-column-start: 1;
      grid-column-end:   11;
      grid-row-start:    3;
      grid-row-end:      11;
    }
  }

  @media(max-width: 510px){
    .item{ 
      height: auto;
    }
  }
</style>
