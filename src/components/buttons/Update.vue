<template>
  <button id="updateButton" class="tab-button" v-on:click="setMainToUpdate">
    Update Address
  </button>
</template>
  
<script>
  export default {
    name: 'UpdateButton',
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      setMainToUpdate(){
        this.$store.commit('setMainView', 'update')
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
</style>
