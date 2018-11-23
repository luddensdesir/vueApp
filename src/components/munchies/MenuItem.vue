<template>
  <div class = "purchase">
    <div class = "pButton $color4 anim" @click="addToCart($event, tab)">
      <span>Add {{ tab.name }} To Cart, For {{ tab.price}}</span>
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

<style scoped lang="scss"> 
$shadowDist: 10px;
  .purchase{
    float: right;
    right: 0%;
    height: 100%;
    width: 20%;
    margin: auto;
    text-align: center;
  }

.pButton:hover .purchase{
  background-color: black;
}

.pButton:hover {
  background-color: black;
  color: white;
  /* height: 2.5em; */
  transform: translate(-$shadowDist, calc(-50% -$shadowDist));

  box-shadow: $shadowDist $shadowDist rgb(155, 155, 155);
}

  .pButton{
    width: 75%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgb(255, 102, 102);
    border: 1px solid black;
    border-radius: 2.5px;
    padding: 2.5px;
    margin: auto;
  }

  @media(max-width: 840px){
    .purchase{
      position: absolute;
      width: 100%;
      z-index: 2;
      background-color: white;
      height: 15%;
      bottom: 0px;
    }   
  }
  
</style>
