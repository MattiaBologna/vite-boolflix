<script>
export default {
    methods: {
        search() {
            console.log('object')

            // svuota l'input
            this.inputValue = ''
        }
    },
    data() {
        return {
            inputValue: ''
        }
    }
}
</script>

<template>
    <nav class="head__navbar">
        <div class="head__logo">BOOLFLIX</div>
        <input type="search" class="head__searchbar" v-model="inputValue" @keyup.enter="search">
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
</style>