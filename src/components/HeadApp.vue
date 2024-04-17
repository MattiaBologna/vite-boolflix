<script>
import { store } from '../store.js';
import axios from 'axios';

export default {

    data() {
        return {
            query: '',
            store
        }
    },

    methods: {

        fetchData() {
            axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.query
                }
            }).then((res) => {
                store.movies = res.data.results
                console.log('movie: ', store.movies)
            })

            axios.get(`https://api.themoviedb.org/3/search/tv`, {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.query
                }
            }).then((res) => {
                store.tvSeries = res.data.results
                console.log('serie: ', store.tvSeries)
            })
        }
    }

}

</script>



<template>
    <nav class="head__navbar">
        <div class="head__logo">BOOLFLIX</div>
        <div class="head__searchbar">
            <input type="text" class="searchbar__input" v-model="query" @keyup.enter="fetchData">
            <button @click="fetchData" class="searchbar__button">Cerca</button>
        </div>
    </nav>
</template>



<style lang="scss" scoped>
.head__navbar {
    min-height: 100px;
    background-color: black;
    color: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.head__logo {
    font-size: 40px;
}

.searchbar__button {
    margin-left: 10px;
}
</style>