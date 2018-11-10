<template>
  <div class="main">
    <SearchContainer :getSWData="getSWData" :searching="searching"/>
    <Matches :searching="searching"/>
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
      SWData: []
    };
  },
  methods: {
    async getSWData(query, option) {
      this.searching = true;
      if (option === "People") {
        const pplData = await getPeopleService(query);
        this.SWData = pplData;
      } else if (option === "Movies") {
        const moviesData = await getMoviesService(query);
        this.SWData = moviesData;
      } else {
        console.log("Unknown option");
      }
      console.log(this.SWData);
    }
  }
};
</script>

<style>
</style>
