<template>
  <!-- parameterize the id -->
  <button  @mouseenter="addColorClass($event)"  @mouseleave="removeColorClass($event)" id="" class="tab-button anim" v-on:click="execute(func, param)">
    {{name}}
  </button>
</template>
  
<!--<script lang="ts">-->
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
      addColorClass : function($event){
        var target = $event.target
        
        target.classList.add('lock')
      },
      removeColorClass : function($event){
        var target = $event.target
        target.classList.remove('lock')
      },
      execute : function(func, param){
        this.$store.dispatch(func, param)
      }
    },
    created(){
    }
  }
</script>

<style lang ="scss" scoped>
  .lock{
    background-color:black;
  }
</style>
