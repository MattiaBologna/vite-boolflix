<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store.js';

export default {

    data() {
        return {
            store
        }
    },

    components: {
        FilmCard
    }

}
</script>



<template>

    <main>
        <ul class="film__list">
            <li v-for="film in store.filmsObject.results" class="film">
                <FilmCard :film="film" />
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