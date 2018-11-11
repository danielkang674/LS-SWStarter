<template>
  <ul>
    <li v-for="(movie,idx) in personMovies" :key=idx>
      {{movie.title}}
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
