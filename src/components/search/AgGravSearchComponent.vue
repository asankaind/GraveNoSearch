<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

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
                @change="query = $event.target.value"
              />

              <ComboboxOptions
                v-if="filteredPeople.length > 0"
                static
                class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                <ComboboxOption
                  v-for="person in filteredPeople"
                  :key="person.id"
                  :value="person"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'cursor-default select-none rounded-md px-4 py-2',
                      active && 'bg-indigo-600 text-white'
                    ]"
                  >
                    {{ person.name }}
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <div
                v-if="query !== '' && filteredPeople.length === 0"
                class="px-4 py-14 text-center sm:px-14"
              >
                <p class="mt-4 text-sm text-gray-900">No people found using that search term.</p>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
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
  props: {},
  setup(props) {
    const searchResults = ref([] as any[])

    const people = [
      { id: 1, name: 'Leslie Alexander', url: '#' }
      // More people...
    ]

    const open = ref(true)
    const query = ref('')
    const filteredPeople = computed(() =>
      query.value === ''
        ? []
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
          })
    )

    function onSelect(person) {
      window.location = person.url
    }

    onMounted(() => {
      // alert('test');
    })

    return {
        filteredPeople,
        open,
        query,
        onSelect
    }
  }
})
</script>