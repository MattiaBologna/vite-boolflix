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
    <li class="card">

        <div class="infos">
            <!-- movie title -->
            <div class="movie_title">
                <p v-if="item.original_name === undefined" class="title"><strong>Title:</strong>{{ item.title }}</p>
                <p v-else class="title"><strong>Title: </strong>{{ item.name }}</p>
            </div>

            <!-- serie title -->
            <div class="serie_title">
                <p v-if="item.original_title === undefined" class="original_title"><strong>Original title: </strong>{{
                    item.original_name }}</p>
                <p v-else class="original_title"><strong>Original title:</strong> {{ item.original_title }}</p>
            </div>

            <!-- language -->
            <div class=" language">
                <p><strong>Language:</strong></p>
                <img v-if="item.original_language === 'en' || item.original_language === 'it' || item.original_language === 'es'"
                    :src="'/' + item.original_language + '_flag.svg'" alt="usa flag" class="flag">
                <img v-else src="/earth_flag.svg" alt="earth flag" class="flag">

            </div>

            <!-- vote -->
            <div class="vote_average">
                <p class="vote_average_number"><strong>Vote:</strong></p>
                <font-awesome-icon v-for="n in Math.floor(item.vote_average / 2)" :icon="['fas', 'star']" />
                <font-awesome-icon v-for="n in (5 - Math.floor(item.vote_average / 2))" :icon="['far', 'star']" />
            </div>

            <!-- description -->
            <div class="overview">
                <p><strong>Overview: </strong>{{ item.overview }}</p>
            </div>
        </div>

        <!-- image -->
        <img v-if="item.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342' + item.poster_path"
            alt="film poster" class="image">
        <img v-else src="/public/def_image.svg" alt="default image" class="def_image image">
    </li>


</template>



<style lang="scss" scoped>
.card {
    min-width: 342px;
    position: relative;
    max-height: 100%;
    cursor: pointer;
}

.infos {
    color: white;
    position: absolute;
    max-width: 342px;
    max-height: 100%;
    overflow-y: auto;
    opacity: 0;
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card:hover .infos {
    opacity: 1;
}

.card:hover .image {
    filter: blur(2px);
    scale: (1.1);
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.vote_average {
    display: flex;
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
}
</style>