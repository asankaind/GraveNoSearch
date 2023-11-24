<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
// import AgProgressBarComponent from '@/components/common/progressbar/AgProgressBarComponent.vue';
import router from "@/router";
// import { AppSettingsModule } from './store';
// import { resolveLocale } from '@/locales';

export default defineComponent ({
  components: {
    // AgProgressBarComponent
  },
    setup() {
    // const selectedLocale = ref(noNb);
    // const layout = computed(() => {
    //   return router.currentRoute.value.meta.layout;
    // });
    // const commonHelper: CommonHelper = container.get<CommonHelper>(
    //   TYPES.CommonHelper
    // );
    // const serverLocation = commonHelper.getServerLocation();

    // if (serverLocation === Constants.ApplicationConstants.CountryCodes.Norway) {
    //   locationLanguage.value = "nb-NO";
    //   selectedLocale.value = noNb;
    // } else {
    //   locationLanguage.value = "sv-SE";
    //   selectedLocale.value = svSe;
    // }

    //moment.locale(locationLanguage.value);
    //kendo.culture(locationLanguage.value);

    // Change datetime locale globally
    // const showProgressBar = computed(() => {
    //     return AppSettingsModule.getProgressBarStatus;
    // });

   onMounted(() => {
 
      // setSelectedLocale();
    });
    
    // const setSelectedLocale = () => {
    // const lang = resolveLocale(navigator.language);
    // switch (lang) {
    //   case 'en':
    //     selectedLocale.value = enUs;
    //     break;
    //   case 'no':
    //     selectedLocale.value = noNb;
    //     break;
    //   case 'se':
    //     //selectedLocale.value = svSe;
    //     break;
    //   case 'dk':
    //   case 'da':
    //     selectedLocale.value = daDk;
    //     break;
    //   default:
    //     selectedLocale.value = enUs;
    //     break;
    // }
    // };


    return {
      // layout,
      // selectedLocale,
      // showProgressBar
    };
  }
});
</script>

<style>

</style>

