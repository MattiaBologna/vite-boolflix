<script>
export default {
    props: ['film']
}
</script>



<template>

    <div>{{ film.title }}</div>
    <div>{{ film.original_title }}</div>
    <div>{{ film.original_language }}</div>
    <div>{{ film.vote_average }}</div>

</template>



<style lang="scss" scoped></style>