<template>
  <div id="loginForm">
    <div>
      <form id = "loginForm" class ="signinForm" v-on:submit.stop.prevent="login">
        <input type="text" maxlength="50" class="" placeholder="[login]" name="login">
        <input type="password" maxlength="32" class="" placeholder="[password]" name="password2">
        <button type="Submit" class="button btn btn-default">[login]</button>
      </form>
    </div>
  </div>
</template>

<!--<script lang ="ts"> -->
<script>
  export default {
    name: 'LoginForm', 
    data(){
      return{
      };
    },
    computed:{ 
    },
    methods: {
      login:function(ev){
        var creds = { 
            username: ev.target.children[0].value,
            password: ev.target.children[1].value
          }
                    
        this.$http.post('users/login', creds)
          .then(function(res){
            localStorage.setItem('loginToken', res.body.token)
            console.log('loginToken')
            console.log(localStorage.getItem('loginToken'))
          })
      }
    },
    created(){
    }
  }
</script>

<style lang ="scss">
#loginForm{
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
