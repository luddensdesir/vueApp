<template>
  <div id="nav">
    <!-- <ul>
      <li><a>Menu</a></li>
      <li><a>Specials</a></li>
      <li><a>Popular Items</a></li>
      <li v-on:click="changeValue" ><a>Location</a></li>
      <li v-on:click="changeValue" class = "signin" ><a>Sign In</a></li>
    </ul>-->
    <ul>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['', { active: currentTab.name === tab.name }]"
        v-on:click ="retrieveMap">{{ tab.name }}
      </button>
    </ul>
    
    <ul class = "cart">
      <li>{{cartItems.length}}</li>
      <li>{{total}}</li>
    </ul> 

  </div>
</template>
        // v-on:click="currentTab = tab">{{ tab.name }}

<script>
  import{mapActions} from 'vuex'

  export default {
    name: 'Navbar',
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    computed:{
      cartItems(){
        return this.$store.getters.cart.content;
      },
      total(){
        return this.$store.getters.cart.total;
      }
    },
    methods: {
      ...mapActions([
        // 'retrieveMenu'
        'retrieveMap'
      ])
    },
    created(){
      // console.log('updateVal')
    }
  }


var tabs = [
  {
    name: 'Menu',
  },
  {
    name: 'Location',
  },
  {
    name: 'Payment',
  },
  {
    name: 'Address',
  },
  {
    name: 'Contact',
  },
  {
    name: 'Order Now',
  },
  {
    name: 'Sign In',
  },
]
</script>

<style>

.cart{
  /* text-align: center; */
}

ul{
  padding: 0px;
  width: 95%;
  margin-right: 0px;
  margin: auto;
}

.signin{
  float: right;
  position: relative;
  right: 0%;
}

#nav li{
  list-style: none;
  /* display:inline; */
}

#nav {
  background-color: green;
  grid-column-start: 1;
  grid-column-end:   11;
  grid-row-start:    1;
  grid-row-end:      2;
  width: 100%;
}  
</style>
