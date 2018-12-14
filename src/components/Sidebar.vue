<template>
  <div id = "sidebarContainer">
    <div class="sidebar col1" >
      <div @mouseenter="addClassesToAll($event)"  @mouseleave="removeColorClass($event)">
        <!-- give login button a top obrder and use the event above to cause some kind of color animation -->
        <!-- this shuld effect all child elements, perhaps except for the checkout -->
        <div id = "mainButtons">
          <GenButton :name="'Login'" :func="'setMainView'" :param="'login'"/>
          <GenButton :name="'Update'" :func="'setMainView'" :param="'update'" />
          <GenButton :name="'Register'" :func="'setMainView'" :param="'register'"/>
          <GenButton :name="'Account'" :func="'updateAddress'"/>
          <GenButton :name="'Past Orders'" :func="'getPastOrders'"/>
          <GenButton :name="'Empty Cart'" :func="'emptyCart'"/>
        </div>
        <ul class = "cart">
          <li class = "" 
            v-for="(item, index) in cartItems"
            v-bind:key="item.id"><span>{{item.name}}<br class="priceBreak"/>+{{item.price}}</span><div class = "buttons"><button class = "updateItem" >Modify</button><button class = "removeItem" v-on:click="removeItem(item, index)">x</button><div class = "clear"></div></div>
          </li>
          <Order :name="'Order'" :func="'setMainView'" :param="'checkout'" :total="total" :price="price"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<!--<script lang ="ts"> -->
<script>
  import{mapActions} from 'vuex'
  import GenButton from './buttons/genButton.vue'
  import Order from './buttons/Order.vue'

  export default {
    name: 'Sidebar',
    data(){
      return{
        renderLists:1
      };
    },
    components: {
      GenButton,
      Order
    },
    computed:{
      cartItems:function(){
        return this.$store.getters.cart.content;
      },
      total:function(){
        return this.$store.getters.cart.content.length;
      },
      price:function(){
        return this.$store.getters.cart.total;
      }
    },
    beforeUpdate:function(){
      const len = this.cartItems.length;
      if(len > 5){
        this.renderLists = 2;
      } else if (len > 10) {
        this.renderLists = 3;
      } else {
        this.renderLists = 1;
      }
    },
    methods: {
      addClassesToAll: function($event){
        var all = $event.target.children[0].children
        for (var i = 0; i < all.length; i++) {
            all[i].classList.add('contrast');
        }
      },
      removeColorClass: function($event){
        var all = $event.target.children[0].children
        for (var i = 0; i < all.length; i++) {
            all[i].classList.remove('contrast');
        }
      },
      getSpecialMenu: function(){
        console.log("retrieveSpecialist")
          this.$store.dispatch('retrieveSpecialist')
      },
      removeItem: function(item, index){
        var args = {item, index}
        this.$store.dispatch('removeFromCart', args)
      }
    },
    created(){
    }
  }

</script>

<style scoped lang="scss">
.tab-button{
  width:100%;
}

.contrast{
  background-color: white;
}
.priceBreak{
  /* display: none; */
}
  
ul{
  padding: 0px;
  height: 50px;
  //fix this;
  //figure out li height, then do stuff
}

.cart li{
  display: block;
}

.buttons{
  width: 100%;
  background-color: #A0DDFA;
  height: auto;
}
.buttons button{
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
}

.removeItem{
  float: right;
}
.updateItem{
  float: left;
}

#mainButtons button:hover{
  padding-top: 10px;
  padding-bottom: 10px;
}

.clear{
  clear: both;
}

span{
  // text-align: center;
}

li{
  width: 100%;
  list-style: none;
  border-bottom: 1px solid black;
  line-height: 1em;
  // text-align: center;
}

a{
  text-decoration: none;
}

#sidebarContainer{
  grid-column-start: 1;
  grid-column-end:   3;
  grid-row-start:    2;
  grid-row-end:      11;
  overflow: hidden;
  height: 100%;
}

.sidebar{
  /* background-color: rgb(247, 247, 247); */
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  box-sizing: border-box;
  padding: 25px;
  /* font-size: 1vi; */
  /* background-color: rgb(255, 252, 225); */
  overflow-y: scroll;
  height: 100%;
  width: calc(100% + 16px);
}

h1{
  margin-top: 0px;
}

@media(max-width: 970px){
  li{
    font-size: .85em;
  }
}

@media(max-width: 880px){
  li{
    font-size: .80em;
  }
}

@media(max-width: 840px){
  li{
    font-size: .75em;
  }
}

@media(max-width: 700px){
  .buttons button{
    font-size: .95em;
  }
}

@media(max-width: 670px){
  .buttons button{
    font-size: .90em;
  }
}

@media(max-width: 660px){
  .buttons button{
    font-size: .85em;
  }
}

@media(max-width: 640px){
  .cart li{
    display: inline-block;
    margin: auto;
    width: 33%;
    button{
      background-color: unset;
    }
  }

  .priceBreak{
    display: none;
  }

  ul{
    width: 25%;
    float: left;
  }

  #sidebarContainer{
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    2;
    grid-row-end:      3;
  }
  
  .sidebar{
  }

  .cart{
    /* width:25%; */
    width:100%;
    float: right;
  } 
}
</style>
