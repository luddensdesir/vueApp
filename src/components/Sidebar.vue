<template>
  <div id = "sidebarContainer">
    <div class="sidebar col1" >
      <h1>Account</h1>
      <Past/>
      <Account/>
      <EmptyCart/> 
      <ul class = "cart">
        <li class = "" 
          v-for="(item, index) in cartItems"
          v-bind:key="item.id">{{item.name}} <br class="priceBreak"/> + {{ item.price }}
          <button v-on:click="removeItem(item, index)">x</button>
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

  export default {
    name: 'Sidebar',
    data(){
      return{
      };
    },
    components: {
      Past,
      Account,
      EmptyCart,
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

<style scoped>
.tab-button{
  width:100%;
}

.priceBreak{
  /* display: none; */
}
  
.cart li{
  display: block;
}

li{
  list-style: none;
  border-bottom: 1px solid black;
  /* color: white; */
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

@media(max-width: 640px){
  .priceBreak{
    display: none;
  }

  ul{
    width: 25%;
    float: left;
  }
  li{
    list-style: none;
    display: inline;
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
