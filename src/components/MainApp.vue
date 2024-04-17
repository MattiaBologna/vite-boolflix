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
        <section>
            <ul class="film__list" v-if="store.movies.length !== 0">
                <Card :item="movie" v-for="movie in store.movies" class="film" :key="movie.id" />
            </ul>
            <p v-else>Nessun film</p>
        </section>
    </main>

</template>



<style lang="scss" scoped>
main {
    padding: 40px;
    background-color: grey;
    flex-grow: 1;
}

.film {
    padding: 20px
}
</style>