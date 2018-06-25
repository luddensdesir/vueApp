<template>
  <keep-alive>
    <div id="center">
      <div id = "albumcontainer">
        <div id = "album" >
          <div class = "image anim" v-for="image in center.photos">
            <img v-bind:src="image.thumbnailUrl"/>
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
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
</script>

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
  flex-wrap: wrap;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: flex-row;
  height: 100%;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  width: calc(100% + 5.17%);
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

.image{
  flex-grow: 0;
  flex-flow: flex-direction;
  flex-basis: auto;
  align-self: flex-start;
  height: 150px;
  text-align: center;
  padding: 0;
  width: 50%;
  margin: auto;
  background-color: black;
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
