<template>
  <button id="orderButton" class="tab-button"  v-on:click="setMainToCheckout">
    {{total}} items for ${{price}}<br/>
    Checkout 
  </button>
</template>
  
<script>
  export default {
    name: 'Order',
    props: ['total', 'price'],
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      setMainToCheckout(){
        this.$store.commit('setMainView', 'checkout')
      }
    },
    created(){
    }
  }

</script>

<style scoped> 
  #orderButton{

  }
</style>
