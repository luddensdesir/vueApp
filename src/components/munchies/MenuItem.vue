<template>
  <div class = "purchase">
    <div class = "pButton $color4" @click="addToCart($event, tab)">
      <span>Add {{ tab.name }} To Cart, For{{ tab.price}}</span>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: ['tab'],
    name: 'MenuItem',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: { 
      addToCart: function($event, newItem){
        var date = new Date().getTime();
        newItem.date = date;
        this.$store.commit('addToCart',newItem)
      } 
    },
    created(){
    }
  }

</script>

<style scoped> 
  .menuItem{
    width: 100%;
    height: 100px;
    /* background-color:green; */
  }

  .purchase{
    float: right;
    right: 0%;
    /* position: relative; */
    height: 100%;
    width: 20%;
    /* background-color: green; */
  }

  .pButton{
    height: 75%;
    width: 75%;
    /* background-color: white; */
    margin-right: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
  }
</style>
