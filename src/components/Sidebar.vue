<template>
  <div id = "sidebarContainer">
    <div class="sidebar col1" >
      <Login/>
      <Update/>
      <Register/>
      <h3>Account</h3>
      <Past/>
      <Account/>
      <EmptyCart/> 
      <ul class = "cart">
        <li class = "" 
          v-for="(item, index) in cartItems"
          v-bind:key="item.id"><span>{{item.name}}<br class="priceBreak"/>+{{item.price}}</span><div class = "buttons"><button class = "updateItem" >Update</button><button class = "removeItem" v-on:click="removeItem(item, index)">x</button><div class = "clear"></div></div>
        </li>
      </ul> 
      <Order :total="total" :price="price"/>
    </div>
  </div>
</template>
  
<script>
  import{mapActions} from 'vuex'
  import Order from './buttons/Order'
  import Past from './buttons/Past'
  import Account from './buttons/Account'
  import EmptyCart from './buttons/EmptyCart'
  import Register from './buttons/Register'
  import Login from './buttons/Login'
  import Update from './buttons/Update'

  export default {
    name: 'Sidebar',
    data(){
      return{
        renderLists:1
      };
    },
    components: {
      Past,
      Account,
      EmptyCart,
      Register,
      Login,
      Update,
      Order
    },
    computed:{
      cartItems(){
        return this.$store.getters.cart.content;
      },
      total(){
        return this.$store.getters.cart.content.length;
      },
      price(){
        return this.$store.getters.cart.total;
      }
    },
    beforeUpdate(){
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
      getSpecialMenu: function(){
        console.log("retrieveSpecialist")
          this.$store.dispatch('retrieveSpecialist')
      },
      testFunc: function(){
        console.log('test')
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

.priceBreak{
  /* display: none; */
}
  
ul{
  padding: 0px;
}

.cart li{
  display: block;
}

.buttons{
  width: 100%;
  background-color: #E5E5E5;
  height: auto;
}
.buttons button{
  box-sizing: border-box;
}

.removeItem{
  float: right;
}
.updateItem{
  float: left;
}

.clear{
  clear: both;
}

span{
  text-align: center;
}

li{
  width: 100%;
  list-style: none;
  border-bottom: 1px solid black;
  line-height: 1em;
  text-align: center;
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
