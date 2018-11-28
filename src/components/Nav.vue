<template>
    <!-- <div @mouseenter="addClassesToAll($event)"  @mouseleave="removeColorClass($event)"> -->
    <div v-bind:class="[{'vertical': dir == 'vertical', 'horizontal': dir == 'horizontal'}]" v-if="type=='profile'">
        <Profile/>
    </div>
    <div v-bind:class="[{'vertical': dir == 'vertical', 'horizontal': dir == 'horizontal'}]" v-else-if="type=='menu'">
        <Menu />
    </div>
</template>
  
<script>
//   import Sidebar from './Sidebar'
//   import Topbar from './Topbar'
  import Profile from './Profile'
  import Menu from './Menu'

  export default {
    name: 'Nav',
    props: ['type', 'dir'],
    data(){
      return{
        // renderLists:1
      };
    },
    components:  {Menu, Profile},
    computed:{
    },
    methods: {
      addClassesToAll: function($event){
        var all = $event.target.children[0].children
        for (var i = 0; i < all.length; i++) {
            all[i].classList.add('contrast');
        }
      },
      removeColorClass: function($event){
        var all = $event.target.children[0].children
        for (var i = 0; i < all.length; i++) {
            all[i].classList.remove('contrast');
        }
      }
    },
    created(){
    }
  }

</script>

<style lang="scss">


  .contrast{
    background-color: white;
  }

  a{
    text-decoration: none;
  }

  .vertical{
    grid-column-start: 1;
    grid-column-end:   3;
    grid-row-start:    2;
    grid-row-end:      11;
    overflow: hidden;
    height: 100%;

    button:hover{
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .tab-button{
      width:100%;
    }

    .cart {
      ul{
        padding: 0px;
        height: 50px;
      //fix this;
      //figure out li height, then do stuff
      }
      li{
        display: block;
        width: 100%;
        list-style: none;
        border-bottom: 1px solid black;
        line-height: 1em;
      }
      button:hover{
        padding-top: 3px;
        padding-bottom: 3px;
      }
    }

    .buttons{
      width: 100%;
      background-color: #A0DDFA;
      height: auto;
      .button{
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0);
      }
    }

    .removeItem{
      float: right;
    }
    .updateItem{
      float: left;
    }
    .clear{
      clear: both;
    }

    h1{
      margin-top: 0px;
    }

    @media(max-width: 970px){
      li{
        font-size: .85em;
      }
    }

    @media(max-width: 880px){
      li{
        font-size: .80em;
      }
    }

    @media(max-width: 840px){
      li{
        font-size: .75em;
      }
    }

    @media(max-width: 700px){
      .buttons button{
        font-size: .95em;
      }
    }

    @media(max-width: 670px){
      .buttons button{
        font-size: .90em;
      }
    }

    @media(max-width: 660px){
      .buttons button{
        font-size: .85em;
      }
    }

    @media(max-width: 640px){
      .cart li{
        display: inline-block;
        margin: auto;
        width: 33%;
        button{
          background-color: unset;
        }
      }

      .priceBreak{
        display: none;
      }

      ul{
        width: 25%;
        float: left;
      }

      .cart{
        /* width:25%; */
        width:100%;
        float: right;
      } 
    }

  }

 
  .horizontal {
    .navContainer{
      width:100%; 
      height: 100%;
      width: 100%;
      border-bottom: 3px solid black;
      padding: 25px;
      box-sizing: border-box;
      text-align: center;
    }
    grid-column-start: 1;
    grid-column-end:   11;
    grid-row-start:    1;
    grid-row-end:      2;

    button{
      padding: 3px;
    }
    .totalCart{
      width: 25%;
      float: right;
      p {
        margin: 0px;
      }

      ul{
        width: auto;
        float: right;
        transition: all 0.5s ease;
      }
    }

    ul{
      padding: 0px;
      width: auto;
      margin-right: 0px;
      margin: auto;
      list-style: none;
      float: left;
    }

    button:hover{
      padding-left: 15px;
      padding-right: 15px;
    }
  }  
  
  .innerVert{
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    box-sizing: border-box;
    padding: 25px;
    overflow-y: scroll;
    height: 100%;
    width: calc(100% + 16px);
  }

  @media(max-width: 640px){
    .vertical{
      grid-column-start: 1;
      grid-column-end:   11;
      grid-row-start:    2;
      grid-row-end:      3;
    }
  }
  
</style>
