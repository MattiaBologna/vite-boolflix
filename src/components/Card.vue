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
        <div class="language">
            <p>{{ item.original_language }}</p>
            <img v-if="item.original_language === 'en' || item.original_language === 'it' || item.original_language === 'es'"
                :src="'/public/' + item.original_language + '_flag.svg'" alt="usa flag" class="flag">
            <img v-else src="/public/earth_flag.svg" alt="earth flag" class="flag">

        </div>
        <div class="vote_average">
            <font-awesome-icon v-for="n in Math.floor(item.vote_average / 2)" :icon="['fas', 'star']" />
            <font-awesome-icon v-for="n in (5 - Math.floor(item.vote_average / 2))" :icon="['far', 'star']" />
            <p class="vote_average_number">{{ item.vote_average }}</p>
        </div>

    </li>

</template>



<style lang="scss" scoped>
.vote_average {
    display: flex;

    .vote_average_number {
        margin-left: 15px;
    }
}

.language {

    display: flex;
    gap: 10px;

    .flag {
        max-width: 30px;
    }
}
</style>