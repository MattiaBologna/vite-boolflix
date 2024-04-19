<script>
import Card from './Card.vue';
import { store } from '../store.js';

export default {

    data() {
        return {
            store
        }
    },

    components: {
        Card
    }

}
</script>



<template>

    <main>
        <section class="movies">
            <h2 class="section__title">Film</h2>
            <ul class="movie_list" v-if="store.movies.length !== 0">
                <Card :item="movie" v-for="movie in store.movies" class="movie" :key="movie.id" />
            </ul>
            <p v-else>Nessun film</p>
        </section>

        <section class="tv_series">
            <h2 class="section__title">Serie TV</h2>
            <ul class="tv_series_list" v-if="store.tvSeries.length !== 0">
                <Card :item="serie" v-for="serie in store.tvSeries" class="movie" :key="serie.id" />
            </ul>
            <p v-else>Nessuna serie</p>
        </section>
    </main>

</template>



<style lang="scss" scoped>
main {
    padding: 40px;
    background-color: #141414;
    flex-grow: 1;
    color: white;
    margin-top: 100px;
}

section {
    margin-bottom: 50px;
}

.section__title {
    margin-bottom: 30px;
}

.movie_list {
    margin-bottom: 40px;
}

.movie_list,
.tv_series_list {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
}

.movie {
    padding: 3px;
}
</style>