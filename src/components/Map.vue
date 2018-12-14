
<template>
  <div id="gMap">
  </div>
</template> 

<!--<script lang ="ts"> -->
<script>
  export default {
    name: 'Map',
    methods: {
    },
    computed:{
    },
    beforeCreate(){
    },
    created(){
      let map = document.createElement('script')
      map.setAttribute('src',"https://maps.googleapis.com/maps/api/js?key=AIzaSyBBPbBPQZ9JIF6QIw3C3Hpqcg89LEzd9IE&callback=initMap&libraries=places")
      document.head.appendChild(map) 
    }
  }

</script>

<style lang="scss" scoped>
  #gMap{
    width: 100%; 
    height: 100%;
  }
</style>
