<template>
    <nav class="head__navbar">
        <div class="head__logo">BOOLFLIX</div>
        <input type="text" class="head__searchbar">
    </nav>
</template>

<script>
export default {

}
</script>

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