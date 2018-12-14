<template>
  <div id="app">
    <!-- <Sidebar/>
    <Topbar/> -->
    <Munchies/>
    <Nav :type="'menu'" :dir="'horizontal'"/>
    <Nav :type="'profile'" :dir="'vertical'"/>
    <!-- <Contact/> -->
  </div >
</template>

<!--<script lang ="ts"> -->
<script>
  import Topbar from './components/Topbar.vue'
  import Sidebar from './components/Sidebar.vue'
  import Munchies from './components/Munchies.vue'
  import Nav from './components/Nav.vue'
  import Contact from './components/Contact.vue'

  export default {
    name: 'App',
    data(){
      return{
        sendthis: "passtoChild",
        value: '0',
      };
    },
    components: { Nav, Topbar, Sidebar, Munchies, Contact},
    computed: {
      cart : function(){
        return this.$store.getters.cart;
      }
    },
    methods: { 
    }
  }
</script>

<style lang="scss">
$color: complement(rgb(189, 59, 59));
$color1: desaturate(adjust-hue( $color, 180),55);
$color1: lighten($color1, 55);
$color2: lighten($color1, 5);
$color2d: darken($color1, 5);
$color3: lighten($color, 45);
$color4: darken(adjust-hue($color1, 240), 10);
$color5: $color;

.anim{
  -webkit-transition: all .5s; 
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;  
}

input{
  background-color: $color3;
  border: 0px;
  border-bottom: 2px solid $color4;
}
.col{
  background-color: $color;
}
.col1{
  background-color: $color1;
}
.col2{
  background-color: $color2;
}
.col2d{
  background-color: $color2d;
}
.col3{
  background-color: $color3;
}
.col4{
  background-color: $color4;
}
.col4{
  background-color: $color5;
}

button:hover{
  color:white;
  background-color:black;
  border-color:white;
}

.cart button:hover{
  background-color:unset;
}

button{
  background-color: $color4;
  border: 0px;
  border-left: 3px solid black;
  box-sizing: border-box;
  background-color: rgb(255, 102, 102);
}

textarea:focus, input:focus, button:focus{
    outline: 0px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}

.center {
  grid-column-start: 3;
  grid-column-end:   11;
  grid-row-start:    2;
  grid-row-end:      11;
  height: 100%;  
  /* background-color: white; */
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  overflow: hidden;
  // background-color: rgb(255, 252, 225);
}
#app {
  // width: calc(35% + 520px);
  width: calc(980px);
  // width: 35%;
  height: 100%;
  margin:auto;
  display:grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 10px;
  // grid-auto-rows: minmax(500px, auto);
} 

body{
  height: 100vh;
}

body, html{
  padding: 0px;
  margin: 0px;
  width: 100%;
  background-color: $color3;
  font: 1em sans-serif;
}


@media(max-width: 960px){
  #app {
    width: 100%;
  }
}


@media(max-width: 840px){
  img{
    height: auto;
    width: 100%;
  }    
}
@media(max-width: 640px){
  img{
    /* height: auto; */
    /* width: 100%; */
  } 
  .center {
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    3;
    grid-row-end:      11;
  }
}

</style>
