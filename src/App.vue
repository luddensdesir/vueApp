<template>
  <div id="app">
    <Sidebar/>
    <Navbar/>
    <Munchies/>
    <!-- <Map/> -->
    <!-- <Contact/> -->
  </div >
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import Munchies from './components/Munchies'
  import Contact from './components/Contact'
  import Map from './components/Map'

  export default {
    name: 'App',
    data(){
      return{
        sendthis: "passtoChild",
        value: '0',
      };
    },
    components: { Navbar, Sidebar, Munchies, Map, Contact},
    computed: {
      cart(){
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

button{
  background-color: $color4;
  border: 0px;
  border-left: 3px solid black;
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
</style>
