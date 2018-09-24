<template>
  <form id = "loginForm" class ="signinForm" v-on:submit.stop.prevent="login">
    <input type="text" maxlength="50" class="" placeholder="[login]" name="login">
    <input type="password" maxlength="32" class="" placeholder="[password]" name="password2">
    <button type="Submit" class="button btn btn-default">[login]</button>
  </form>
</template>

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
      login(ev){
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

<style>
  #loginForm{
    background-color: white;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 50%;
  }
</style>
