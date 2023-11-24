
<template>
    <div>
Terer
    </div>
  </template>
  
  <script lang="ts">
  import {  defineComponent,onMounted} from 'vue';
//   import { i18n, translate} from '@/locales';
  import router from '../router';

  
  export default defineComponent({
     name:"ContextView",
     methods: {
    //   translate
    },
    components:{   
    },
    setup(){
  
      onMounted(  async()=> {
          router.push('/search');
        });     
        
        return{
        };
    }
  });
  </script> 