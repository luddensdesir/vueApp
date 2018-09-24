
<template>
    <div id = "mainContainer">
      <div id = "main" >
        <div
          v-for="(tab, $index) in menuItems"
          v-bind:key="tab.name"
          v-bind:class="['item', {'col2': $index % 2 === 0, 'col2d': $index % 2 !== 0 }]"
          v-on:click="currentTab = tab">
          <MenuItem :tab="tab"/> 
            <img v-bind:src="tab.image"/>
        </div>
      </div>
    </div>
</template>

<script>  
  import MenuItem from './munchies/MenuItem'
  import img1 from "../assets/1.jpg"
  import img2 from "../assets/2.jpg"
  import img3 from "../assets/3.jpg"
  import img4 from "../assets/4.jpg"
  import img5 from "../assets/5.jpg"
  import img6 from "../assets/6.jpg"
  import img7 from "../assets/7.jpg"
  import img8 from "../assets/8.jpg"

  export default {
    name: 'Main',
    components: {MenuItem},
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
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
    computed:{
      menuItems(){
        var menu = this.$store.getters.menu; 
        
        //this is bad. i should feel bad
        for(var i = 0; i < menu.items.length; i++){
          menu.items[i].image = tabs[i].image;
        }

        return menu.items;
      }
    },
    beforeCreate(){
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
  #mainContainer{
    overflow:hidden;
    width:100%;
    height: 100%;
  }

  #main{ 
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    width: calc(100% + 17px);
  }

</style>
