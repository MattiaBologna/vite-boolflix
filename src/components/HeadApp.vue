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

            // svuota la query 
            this.query = ''
        }
    }

}

</script>



<template>
    <nav class="head__navbar">
        <div class="logo_links_container">
            <img class="head__logo" src="/netflix_logo.svg" alt="netflix logo">
            <div class="head__links">
                <a class="head__link" href="#">Serie TV</a>
                <a class="head__link" href="#">Home</a>
                <a class="head__link" href="#">Film</a>
                <a class="head__link" href="#">Nuovi e popolari</a>
                <a class="head__link" href="#">La mia lista</a>
                <a class="head__link" href="#">Sfoglia per lingua</a>
            </div>
        </div>
        <div class="head__searchbar">
            <input type="text" class="searchbar__input" placeholder="Titolo film o serie tv..." v-model="query"
                @keyup.enter="fetchData">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="searchbar__magnifying" />
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
    justify-content: space-between;
    padding: 0px 50px;
    position: fixed;
    z-index: 4;
    width: 100%;
}

.logo_links_container {
    display: flex;
    align-items: center;
    gap: 100px;
}

.head__logo {
    height: 50px;
}

.head__links {
    color: white;
    display: flex;
    gap: 30px;
    font-weight: 400;
}

.head__link:hover {
    color: grey;
}

.head__searchbar {
    position: relative;
}

.searchbar__input {
    padding: 10px;
    font-size: 1.1em;
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
}

.searchbar__input:focus {
    border: white 1px solid;
    outline: none;
}

.searchbar__button {
    margin-left: 10px;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: red;
    color: white;
    font-weight: 700;
    font-size: 1.1em;
}

.searchbar__magnifying {
    color: white;
    position: absolute;
    transform: translateY(90%) translateX(-150%);
    pointer-events: none;
}
</style>