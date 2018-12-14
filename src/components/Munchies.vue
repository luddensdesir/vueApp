<template>
  <keep-alive> 
    <div class="center col5">
      <Checkout v-if="checkingOut" />
      <UpdateInfo v-if="updatingInfo" />
      <LoginForm  v-if="notLoggedIn" />
      <RegisterForm  v-if="notRegistered" />
      <Main  v-if="viewingMenu" />
      <Map v-if="viewingMap" />
    </div>
  </keep-alive>
</template>

<!--<script lang ="ts"> -->
<script>
  import utils from '../scripts/utils.js'
  import UpdateInfo from './UpdateInfo.vue'
  import LoginForm from './LoginForm.vue'
  import RegisterForm from './RegisterForm.vue'
  import Main from './Main.vue'
  import Checkout from './Checkout.vue'
  import Map from './Map.vue'

  export default {
    name: 'Munchies',
    components: { UpdateInfo, Checkout, RegisterForm, Map, LoginForm, Main },
    computed: {
        checkingOut:function(){
          var val = this.$store.getters.selection
          return val['checkout'];
        },
        notRegistered:function(){
          var val = this.$store.getters.selection
          return val['register'];
        },
        notLoggedIn:function(){
          var val = this.$store.getters.selection
          return val['login'];
        },
        viewingMenu:function(){
          var val = this.$store.getters.selection
          return val['menu'];
        },
        viewingMap:function(){
          var val = this.$store.getters.selection
          return val['map'];
        },
        updatingInfo:function(){
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
