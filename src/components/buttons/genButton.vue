<template>
  <!-- parameterize the id -->
  <button  @mouseenter="addColorClass($event)"  @mouseleave="removeColorClass($event)" id="" class="tab-button anim" v-on:click="execute(func, param)">
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
      addColorClass($event){
        var target = $event.target
        
        target.classList.add('lock')
      },
      removeColorClass($event){
        var target = $event.target
        target.classList.remove('lock')
      },
      execute(func, param){
        this.$store.dispatch(func, param)
      }
    },
    created(){
    }
  }
</script>

<style scoped>
  .lock{
    background-color:black;
  }
</style>
