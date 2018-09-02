<template>
  <keep-alive> 
    <div class="center col5">
      <Checkout v-bind:is="checkingOut" />
      <UpdateInfo v-bind:is="updatingInfo" />
      <LoginForm  v-bind:is="notLoggedIn" />
      <RegisterForm  v-bind:is="notRegistered" />
      <div id = "albumcontainer">
        <div id = "album" >
          <div
            v-for="(tab, $index) in menuItems"
            v-bind:key="tab.name"
            v-bind:class="['item', {'col2': $index % 2 === 0, 'col2d': $index % 2 !== 0 }]"
            v-on:click="currentTab = tab">
            <MenuItem :tab="tab"/> 
            <!-- <div class = "image"> -->
              <img v-bind:src="tab.image"/>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
  import utils from './scripts/common.js'
  import img1 from "../assets/1.jpg"
  import img2 from "../assets/2.jpg"
  import img3 from "../assets/3.jpg"
  import img4 from "../assets/4.jpg"
  import img5 from "../assets/5.jpg"
  import img6 from "../assets/6.jpg"
  import img7 from "../assets/7.jpg"
  import img8 from "../assets/8.jpg"
  import UpdateInfo from './UpdateInfo'
  import LoginForm from './LoginForm'
  import RegisterForm from './RegisterForm'
  import MenuItem from './munchies/MenuItem'
  import Checkout from './Checkout'

  export default {
    name: 'Munchies',
    components: { UpdateInfo,  MenuItem, Checkout, RegisterForm },
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    computed: {
        informForms(){
        },
        menuItems(){
          var menu = this.$store.getters.menu; 
          
          //this is bad. i should feel bad
          for(var i = 0; i < menu.items.length; i++){
            menu.items[i].image = tabs[i].image;
          }

          return menu.items;
        }
    },
    methods: {
      submitRegistration(ev){
        var formData = this.formToJson(ev.target)
        console.log(formData)
        this.$http.post('users/register', formData)
          .then(function(res){
            utils.setAuthToken(res.body.token)
          })
      },
      updateVal: function(){
        this.$store.commit('changeValue')
      }
    },
    created(){
      this.$store.dispatch('retrieveMainMenu')
    }
  }

  function setImages(img, name){
    return{
      name: name, 
      price: 0,  
      image: img
    }
  }

  var tabs = []

   tabs.push(setImages(img1, 'chicken'))
   tabs.push(setImages(img2, 'happy tots'))
   tabs.push(setImages(img3, 'churros'))
   tabs.push(setImages(img4, 'sandwich'))
   tabs.push(setImages(img5, 'morning'))
   tabs.push(setImages(img6, 'ficken'))
   tabs.push(setImages(img7, 'strips'))
   tabs.push(setImages(img8, 'grilledcheese'))

</script>
 
<style lang ="scss">
    
  #albumcontainer{
    overflow:hidden;
    width:100%;
    height: 100%;
  }

  #album{ 
    height: 100%;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    width: calc(100% + 1vw);
    /* background-color: white; */
  }

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
