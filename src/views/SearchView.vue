<template>
    <div class="min-h-screen bg-cover" style="background-image: url('./assets/images/bg.png');">
      <ag-grav-search-component :searchResults="searchResults" :totalCount="totalCount" @searchGraveRecords="searchGraveRecords" />
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
    const totalCount = ref(0);

    const searchGraveRecords = async (searchVal: string) => {
      if(searchVal){
        axios({
          method: 'get',
          url: 'https://graverecordssearchapi.azurewebsites.net/GraveRecordsSearch/GetGraveRecord/' + searchVal + '/15/1'
          // responseType: 'stream'
        }).then(function (response) {
          searchResults.value = response.data.value as any;
          totalCount.value = response.data.totalRecordCount;
        })
      }else{
        searchResults.value = []
        totalCount.value = 0;
      }

      // await searchService.getGraveRecord('in', 100, 1)
    }

    return {
      searchResults,
      totalCount,
      searchGraveRecords
    }
  }
})
</script>