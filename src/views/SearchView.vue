<template>
  <div >
    <ag-grav-search-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AgGravSearchComponent from "../components/search/AgGravSearchComponent.vue";

export default defineComponent({
  name: 'SearchView',
  components: {
    AgGravSearchComponent
  },
  setup(props) {

    return {
      
    }
  }
});
</script>