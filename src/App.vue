<script>
import { store } from './store.js';
import HeadApp from './components/HeadApp.vue';
import MainApp from './components/MainApp.vue';
import axios from 'axios'

export default {
  components: {
    HeadApp,
    MainApp
  },
  data() {
    return {

    }
  },
  methods: {
    searchFilm() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro').then((res) => {
        const data = res.data
        store.filmsObject = data

        console.log(store.filmsObject)
      })
    }
  },
  created() {
    this.searchFilm()
  }
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