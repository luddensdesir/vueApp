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
        v-on:click="currentTab = tab">{{ tab.name }}
      </button>
    </ul>
    
    <ul class = "cart">
      <li>{{cartItems.length}}</li>
      <li>{{total}}</li>
      <!-- <li><a class = "cart" v-for="item in cartItems"
        v-bind:key="item.name">{{item.num}}</a>
      </li> -->
    </ul> 


  </div>
</template>

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
        'changeValue'
      ])
    },
    created(){
      // console.log('updateVal')
    }
  }


var tabs = [
  {
    name: 'Menu',
    component: {
      template: '<div>Kart</div>'
    }
  },
  {
    name: 'Location',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Payment',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Address',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Contact',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Order Now',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Sign In',
    component: {
      template: '<div>About</div>'
    }
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
