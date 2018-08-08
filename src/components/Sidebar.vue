<template>
  <div id="sidebar" >
    <h1>Sidebar</h1>
    <Past/>
    <Address/>
    <Empty/>
    <!-- <ul>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click =""
        >{{ tab.name }}
      </button>
    </ul> -->
    
    <ul class = "cart">
      <li class = "" 
        v-for="(item, index) in cartItems"
        v-bind:key="item.id">{{item.name}} + {{ item.price }}
        <button v-on:click="removeItem(item, index)">x</button>
      </li>
    </ul> 

    <Order/>
  </div>
</template>
  
<script>
  import{mapActions} from 'vuex'
  import Order from './buttons/Order'
  import Past from './buttons/Past'
  import Address from './buttons/Address'
  import Empty from './buttons/Empty'

  export default {
    name: 'Sidebar',
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    components: {
      Past,
      Address,
      Empty,
      Order
    },
    computed:{
      cartItems(){
        var content = this.$store.getters.cart.content;
        return content
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

var tabs = [
  // {
  //   name: 'Past Orders', 
  // },
  // {
  //   name: 'Order Now', 
  // },
  // {
  //   name: 'Address',
  // },
  // {
  //   name: 'Empty Cart', 
  // },
  // {
  //   name: 'Sign In',
  // }
]
</script>

<style scoped>
.cart{
}
.tab-button{
  width:100%;
}

#sidebar {
  background-color: blue;
  grid-column-start: 1;
  grid-column-end:   3;
  grid-row-start:    2;
  grid-row-end:      11;
}

.cart li{
  display: block;
}

li{
  list-style: none;
  color: white;
}

a{
  text-decoration: none;
}

@media(max-width: 640px){
  ul{
    width: 25%;
    float: left;
  }
  li{
    list-style: none;
    display: inline;
  }

  .cart{
    width:25%;
    float: right;
  }

  #sidebar {
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    2;
    grid-row-end:      3;
  }
}
</style>
