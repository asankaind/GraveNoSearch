<template>
  <TransitionRoot :show="true" as="template">
    <Dialog as="div" class="relative z-10">
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          >
            <Combobox @update:modelValue="onSelect">
              <ComboboxInput
                class="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                @change="searchRecords"
              />

              <ComboboxOptions
                v-if="searchResultsList.length > 0"
                static
                class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                <ComboboxOption
                  v-for="(res, index) in searchResultsList"
                  :key="index"
                  :value="res"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'cursor-default select-none rounded-md px-4 py-2',
                      active && 'bg-indigo-600 text-white'
                    ]"
                  >
                    {{ res.lastburiedFirstName }} {{res.lastburiedlastName}} {{ moment(res.lastburiedDOB).format('L') }} - {{ moment(res.lastburiedDOD).format('L') }}
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
              <div v-if="totalRecordCount > 0" class="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                <b>Showing {{ showingCount }} of {{ totalRecordCount }} records</b>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import moment from "moment";
// import GraveRecordsDto from '../dto/GraveRecordDto'

export default defineComponent({
  name: 'AgGravSearchComponent',
  components: {
      Combobox,
      ComboboxInput,
      ComboboxOptions,
      ComboboxOption,
      Dialog,
      DialogPanel,
      TransitionChild,
      TransitionRoot
  },
  methods: {},
  props: {
    searchResults: {
      type: Array,
      required: true
    },
    totalCount: {
      type: Number
    }
  },
  setup(props, {emit}) {
    const searchResultsList = ref([] as any[])
    const totalRecordCount = ref(0);
    const showingCount = ref(15);

    function onSelect(record: any) {
      // open grave record details
    }

    watch(
      () => props.searchResults,
      () => {
        searchResultsList.value = props.searchResults;
      }
    );
    
    watch(
      () => props.totalCount,
      () => {
        totalRecordCount.value = props.totalCount;
        showingCount.value = totalRecordCount.value > 15 ? 15 :totalRecordCount.value;
      }
    );

    onMounted(() => {
      // alert('test');
    })

    const searchRecords = (event: any) => {
        emit("searchGraveRecords", event.target.value);
    };

    return {
        onSelect,
        searchRecords,
        searchResultsList,
        moment,
        totalRecordCount,
        showingCount
    }
  }
})
</script>