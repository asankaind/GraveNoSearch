<template>
    <div class="min-h-screen bg-cover" style="background-image: url('./assets/images/back_1.png');">
      <ag-grav-search-component :searchResults="searchResults" @searchGraveRecords="searchGraveRecords" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AgGravSearchComponent from '../components/search/AgGravSearchComponent.vue'

import { container } from '../ioc/DIContainer'
import { TYPES } from '../ioc/Types'
// import GraveRecordsDto from '../dto/GraveRecordDto'
import axios from 'axios'

export default defineComponent({
  name: 'SearchView',
  components: {
    AgGravSearchComponent
  },
  setup(props) {
    // const searchService: SearchService = container.get<SearchService>(TYPES.SearchService)
    const searchResults = ref([] as any[]);

    const searchGraveRecords = async (searchVal: string) => {

      axios({
        method: 'get',
        url: 'https://graverecordssearchapi.azurewebsites.net/GraveRecordsSearch/GetGraveRecord/' + searchVal + '/10/1'
        // responseType: 'stream'
      }).then(function (response) {
        searchResults.value = response.data.value as any;
      })
      // await searchService.getGraveRecord('in', 100, 1)
    }

    return {
      searchResults,
      searchGraveRecords
    }
  }
})
</script>