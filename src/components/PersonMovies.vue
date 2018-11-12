<template>
  <ul class="person-details-list">
    <li v-for="(movie,idx) in personMovies" :key=idx class="char-movie-list">
      <router-link :to="{name: 'MovieDetails', params: {movie}}">
        {{movie.title}}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "PersonMovies",
  props: ["personMovies"]
};
</script>

<style>
ul.person-details-list {
  text-align: left;
  margin: 0.3rem 0 0 -1.4rem;
}

li.char-movie-list > a {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}
</style>
