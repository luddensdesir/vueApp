<template>
  <button id="pastOrders" class="tab-button" v-on:click="getPastOrders">
    Past Orders
  </button>
</template>
  
<script>
  export default {
    name: 'Past',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      getPastOrders(){
        this.$store.dispatch('getPastOrders')
      }
    },
    created(){
    }
  }

</script>

<style scoped> 
  #pastOrders{

  }
</style>
