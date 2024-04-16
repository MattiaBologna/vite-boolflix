<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store.js';

export default {
    components: {
        FilmCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div>Main</div>
        <ul class="film__list">
            <li v-for="film in store.filmsObject.results" class="film">
                <div>{{ film.title }}</div>
                <div>{{ film.original_title }}</div>
                <div>{{ film.original_language }}</div>
                <div>{{ film.vote_average }}</div>
            </li>
        </ul>
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