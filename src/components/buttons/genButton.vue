<template>
  <!-- parameterize the id -->
  <button id="" class="tab-button anim" v-on:click="execute(func, param)">
    {{name}}
  </button>
</template>
  
<script>
  export default {
    name: 'genButton',
    props: ['name', 'func', 'param'],
    data(){
      return{
      };
    },
    computed:{
    },
    methods: {
      execute(func, param){
        this.$store.dispatch(func, param)
      }
    },
    created(){
    }
  }
</script>

<style scoped> 
</style>
