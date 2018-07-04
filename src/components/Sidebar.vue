<template>
  <div id="sidebar" >
    <h1>Sidebar</h1>
    <ul>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab">{{ tab.name }}
      </button>
    </ul>
    
    <ul class = "cart">
      <li class = "" v-for="item in cartItems"
        v-bind:key="item.name">{{item.name}} + {{ item.price }}
        <button v-on:click="removeItem(item)">x</button>
      </li>
    </ul> 
  </div>
</template>
  
<script>
  import{mapActions} from 'vuex'
  export default {
    name: 'Sidebar',
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    computed:{
      cartItems(){
        var content = this.$store.getters.cart.content;
        console.log(content)
        return content
      }
    },
    methods: {
      
      removeItem: function(item){
        this.$store.dispatch('removeFromCart', item)
      }
      // ...mapActions([
      //   'removeItem' //how do i pass objects then?
      // ])
    },
    created(){
    }
  }


var tabs = [
  {
    name: 'Specials',
    component: {
      template: '<div>Delivery</div>'
    }
  },
  {
    name: 'Past Orders',
    component: {
      template: '<div>Delivery</div>'
    }
  },
  {
    name: 'Popular',
    component: {
      template: '<div>About</div>'
    }
  },
  {
    name: 'Order Now',
    component: {
      template: '<div>Kart</div>'
    }
  }
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
