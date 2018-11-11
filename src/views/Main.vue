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
        this.people = pplData.results;
      } else if (option === "movies") {
        const moviesData = await getMoviesService(query);
        this.movies = moviesData.results;
      } else {
        console.log("Unknown option");
      }
      this.searching = false;
    }
  }
};
</script>

<style>
.main {
  background-color: #ededed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-areas: ". SearchContainer MatchesBG .";
  height: 88vh;
}

.SearchContainer {
  grid-area: SearchContainer;
}

.MatchesBG {
  grid-area: MatchesBG;
}
</style>
