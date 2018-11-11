<template>
  <ul>
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
</style>
