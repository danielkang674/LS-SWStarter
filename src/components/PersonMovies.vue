<template>
  <ul class="person-details-list">
    <li v-for="(movie,idx) in personMovies" :key=idx>
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
</style>
