<template>
  <keep-alive>
    <div id="center">
      <div id = "albumcontainer">
        <div id = "album" >
          <div
            v-for="tab in tabs"
            v-bind:key="tab.name"
            v-bind:class="['item', { active: currentTab.name === tab.name }]"
            v-on:click="currentTab = tab">
            <div class = "purchase"><div class = "pButton" @click="addToCart($event, tab.name)"><span>Add {{ tab.name }} To Cart</span></div></div>
            <div class = "image">
              <img v-bind:src="tab.image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
  import name1 from "../assets/1.jpg"
  import name2 from "../assets/2.jpg"
  import name3 from "../assets/3.jpg"
  import name4 from "../assets/4.jpg"
  import name5 from "../assets/5.jpg"
  import name6 from "../assets/6.jpg"
  import name7 from "../assets/7.jpg"
  import name8 from "../assets/8.jpg"

  export default {
    name: 'Munchies',
    data(){
      return{
        tabs: tabs,
        currentTab: tabs[0]
      };
    },
    computed: {
    },
    methods: {
      addToCart: function($event, var1){
        var date = new Date();
        var newObj = {
          num: var1,
          added: date
        }
        this.$emit('thingyClicked', newObj );
      },
      updateVal: function(){
        this.$store.commit('changeValue')
        console.log('updateVal')
      }
    },
    created(){
    }
  }

  function setImages(img, name){
    return{
      name: name, 
      component: { 
        template: ''
      },
      image: img
    }
  }

  var tabs = []

   tabs.push(setImages(name1, 'chicken'))
   tabs.push(setImages(name2, 'happy tots'))
   tabs.push(setImages(name3, 'churros'))
   tabs.push(setImages(name4, 'sandwich'))
   tabs.push(setImages(name5, 'morning'))
   tabs.push(setImages(name6, 'ficken'))
   tabs.push(setImages(name7, 'strips'))
   tabs.push(setImages(name8, 'grilledcheese'))

</script>


<!--<script> -->
/*
   export default {
     name: 'Center',
     // data(){
     //   return {
     //     photos:
     //   }
     // },
     computed: {
       center(){
         return this.$store.getters.center;
       }
     },
      
       // maxLoad: 20,
       // maxImages: 20,
       // value: '0'
     methods: {
       modifyValue: function(val){
       
       },
       loadImages: function(){
         var oldPos = this.center.pos;
         var max =  oldPos + this.center.maxImages;
        if( max > this.center.maxImages){
           max = this.center.maxImages;
         }
         for(; this.center.pos < max; this.center.pos++){
           this.center.photos.push(this.center.allPhotos[this.center.pos])
         }
        console.log(this.center.photos)
       },
       scroll: function(){
       },
       getImages: function(){
         // https://randomuser.me/api/
          this.$http.get('https://jsonplaceholder.typicode.com/photos')
            .then(function(response){
              this.center.allPhotos = response.body;
              this.loadImages();
            }); 
       }
     },
     mounted: function(){
       var album = document.getElementById('album');
       album.onscroll = () => { 
         let bottomOfWindow = album.scrollTop > (album.offsetHeight - 200)/2
         if (bottomOfWindow) {
           this.loadImages();
         }
       };
     },
     created: function(){
       this.getImages();
     }
   }
   */
<!--</script> -->

<style>
#center {
  grid-column-start: 3;
  grid-column-end:   11;
  grid-row-start:    2;
  grid-row-end:      11;
  height: 100%;
}

#albumcontainer{
  overflow:hidden;
  width:100%;
  height: 100%;
}


#album{
  // flex-wrap: wrap;
  // display: inline-flex;
  // flex-direction: row;
  // justify-content: flex-start;
  // align-items: flex-start;
  // align-items: flex-row;
  height: 100%;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  width: calc(100% + 1vw);
  background-color: white;
}

.item{
  // flex-grow: 0;
  // flex-flow: flex-direction;
  // flex-basis: auto;
  // align-self: flex-start;
  // margin: auto;
  /* background-color: black; */
  height: auto;
  text-align: left;
  padding: 0;
  width: 100%;
  float: right;
  height: 200px;
  position: relative;
}

.item:nth-child(even) {
  /* background-color: red; */
  float: left;
  text-align: right;
}

.image{
  height: 100%;
  float: right;
  right: 0%;
}


.item:nth-child(even) .image{
  float: left;
  left: 0%;
}

.item img{
  height: 100%;
  width: auto;
}

.pButton{
  height: 75%;
  width: 75%;
  background-color: red;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: auto;
}

.item:nth-child(even) .purchase{
  float: left;
  left: 0%;
}

.purchase{
  float: right;
  right: 0%;
  /* position: relative; */
  height: 100%;
  width: 20%;
  background-color: green;
}
body{
  overflow: hidden;
}

.anim{
  -webkit-transition: all .5s; 
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;  
}

@media(max-width: 640px){
  #center {
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    3;
    grid-row-end:      11;
  }
}
</style>
