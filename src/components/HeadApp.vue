<script>
import { store } from '../store.js';

export default {

    data() {
        return {
            searchInput: '',
            store
        }
    },

    methods: {
        search() {
            console.log('Hai cercato: ', this.searchInput)

            // manda nello store il valore dell'input
            store.searchInput = this.searchInput

            // svuota l'input
            this.searchInput = ''
        }
    }

}

</script>



<template>
    <nav class="head__navbar">
        <div class="head__logo">BOOLFLIX</div>
        <div class="head__searchbar">
            <input type="search" class="searchbar__input" v-model="searchInput" @keyup.enter="search">
            <button @click="search" class="searchbar__button">Cerca</button>
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