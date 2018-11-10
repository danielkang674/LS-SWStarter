<template>
  <div class="main">
    <SearchContainer :getSWData="getSWData" :searching="searching" />
    <Matches :searching="searching" :people="people" :movies="movies"/>
  </div>
</template>

<script>
import SearchContainer from "../components/SearchContainer";
import Matches from "../components/Matches";
import getPeopleService from "../services/getPeopleService";
import getMoviesService from "../services/getMoviesService";
export default {
  name: "main",
  components: {
    SearchContainer,
    Matches
  },
  data() {
    return {
      searching: false,
      people: [],
      movies: []
    };
  },
  methods: {
    async getSWData(query, option) {
      this.people = [];
      this.movies = [];
      this.searching = true;
      if (option === "people") {
        const pplData = await getPeopleService(query);
        this.people = pplData;
      } else if (option === "movies") {
        const moviesData = await getMoviesService(query);
        this.movies = moviesData;
      } else {
        console.log("Unknown option");
      }
      this.searching = false;
      console.log(this.people, this.movies);
    }
  }
};
</script>

<style>
</style>
