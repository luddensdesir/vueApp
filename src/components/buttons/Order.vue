<template>
  <button id="orderButton" class="tab-button">
    {{total}} items for {{price}}!<br/>
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
    },
    created(){
    }
  }

</script>

<style scoped> 
  #orderButton{

  }
</style>
