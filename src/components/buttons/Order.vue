<template>
  <div id = "checkoutButton">
    <GenButton :name="'Order ' + total + ' items for ' + price" :func="'setMainView'" :param="'checkout'"/> 
  </div>
</template>
  
  
<!--<script lang="ts">-->
<script>
  import GenButton from './genButton.vue'
  export default {
    name: 'Order',
    props: ['total', 'price'],
    data(){
      return{
      };
    },
    components:{
      GenButton
    },
    computed:{
    },
    methods: {
      setMainToCheckout:function(){
        this.$store.commit('setMainView', 'checkout')
      }
    },
    created(){
    }
  }

</script>

<style lang ="scss" scoped>
  #checkoutButton button{
    width: 100%;
  }

  #checkoutButton{
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    width:100%;
    text-align: center;
  }

  #checkoutButton .tab-button:hover{
    background-color: black; 
  }
</style>