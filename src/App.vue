<script>

import { store } from './store.js';
import HeadApp from './components/HeadApp.vue';
import MainApp from './components/MainApp.vue';

export default {

  components: {
    HeadApp,
    MainApp
  },

}

</script>




<template>

  <HeadApp />

  <MainApp />

</template>




<style lang="scss">
@use './components/style/general';

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>