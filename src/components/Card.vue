<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            hover: false
        }
    }
}
</script>



<template>
    <li class="card" @mouseover="hover = true" @mouseleave="hover = false">

        <div class="infos" v-if="hover">
            <!-- movie title -->
            <p class="title">{{ item.title }}</p>
            <p class="original_title">{{ item.original_title }}</p>

            <!-- serie title -->
            <p class="title">{{ item.name }}</p>
            <p class="original_title">{{ item.original_name }}</p>

            <!-- language -->
            <div class=" language">
                <p>{{ item.original_language }}</p>
                <img v-if="item.original_language === 'en' || item.original_language === 'it' || item.original_language === 'es'"
                    :src="'/public/' + item.original_language + '_flag.svg'" alt="usa flag" class="flag">
                <img v-else src="/public/earth_flag.svg" alt="earth flag" class="flag">

            </div>

            <!-- vote -->
            <div class="vote_average">
                <font-awesome-icon v-for="n in Math.floor(item.vote_average / 2)" :icon="['fas', 'star']" />
                <font-awesome-icon v-for="n in (5 - Math.floor(item.vote_average / 2))" :icon="['far', 'star']" />
                <p class="vote_average_number">{{ item.vote_average }}</p>
            </div>
        </div>

        <!-- image -->
        <img v-if="item.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342' + item.poster_path"
            alt="film poster" class="image">
        <img v-else src="/public/def_image.jpg" alt="default image" class="def_image image">
    </li>


</template>



<style lang="scss" scoped>
.card {
    min-width: 342px;
}

.infos {
    color: white;
    position: absolute;
    max-width: 342px;
}

.image {
    width: 100%;
}

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

.def_image {
    width: 342px;
    object-fit: cover;
}
</style>