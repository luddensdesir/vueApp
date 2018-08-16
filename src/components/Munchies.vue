<template>
  <keep-alive> 
    <div class="center">
      <UpdateInfo/>
      <LoginForm/>
      <RegisterForm/>
      <div id = "albumcontainer">
        <div id = "album" >
          <div
            v-for="tab in menuItems"
            v-bind:key="tab.name"
            v-bind:class="['item', { active: currentTab.name === tab.name }]"
            v-on:click="currentTab = tab">
            <!-- <MenuItem/> -->
            <div class = "purchase">
              <div class = "pButton" @click="addToCart($event, tab)">
                <span>Add {{ tab.name }} To Cart, For{{tab.price}}</span>
              </div>
            </div>
            <div class = "image">
              <img v-bind:src="tab.image"/>
            </div>
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

  export default {
    name: 'Munchies',
    components: { UpdateInfo, LoginForm, MenuItem, RegisterForm },
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    computed: {
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
      addToCart: function($event, newItem){
        var date = new Date().getTime();
        newItem.date = date;
        this.$emit('itemToCart', newItem );
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
 
<style> 
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
  }

  .item:nth-child(even) {
    /* background-color: red; */
    float: left;
    text-align: right;
  }

  .image{
    height: 100%;
    float: right;
    right: 0%;
  }


  .item:nth-child(even) .image{
    float: left;
    left: 0%;
  }

  .item img{
    height: 100%;
    width: auto;
  }

  .pButton{
    height: 75%;
    width: 75%;
    background-color: red;
    margin-right: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
  }

  .item:nth-child(even) .purchase{
    float: left;
    left: 0%;
  }

  .purchase{
    float: right;
    right: 0%;
    /* position: relative; */
    height: 100%;
    width: 20%;
    background-color: green;
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
  @media(max-width: 640px){
    .center {
      grid-column-start: 1;
      grid-column-end:   11;
      grid-row-start:    3;
      grid-row-end:      11;
    }
  }
</style>
