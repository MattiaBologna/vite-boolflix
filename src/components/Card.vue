<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>



<template>
    <li>
        <p>{{ item.title }}</p>
        <p>{{ item.original_title }}</p>
        <p>{{ item.original_language }}</p>
        <p>{{ item.vote_average }}</p>
    </li>

</template>



<style lang="scss" scoped></style>