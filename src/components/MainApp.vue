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
            <h2>Movies</h2>
            <ul class="movie_list" v-if="store.movies.length !== 0">
                <Card :item="movie" v-for="movie in store.movies" class="movie" :key="movie.id" />
            </ul>
            <p v-else>Nessun film</p>
        </section>

        <section class="tv_series">
            <h2>Series</h2>
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
    background-color: grey;
    flex-grow: 1;
}

.movie_list,
.tv_series_list {
    display: flex;
    overflow: auto;
}

.movie {
    padding: 20px
}
</style>