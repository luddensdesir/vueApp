<template>
  <div class ="innerVert navContainer col1">
    <!-- give login button a top obrder and use the event above to cause some kind of color animation -->
    <!-- this shuld effect all child elements, perhaps except for the checkout -->
    <div id = "profileButtons" class = "navbuttons">
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
</template>
  
<script>
  import{mapActions} from 'vuex'
  import GenButton from './buttons/genButton'
  import Order from './buttons/Order'

  export default {
    name: 'Profile',
    // props: ['dir'],
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
</style>
