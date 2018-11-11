<template>
  <div class="MatchesBG">
    <h2 class="Results">Results</h2>
    <div class="divider"></div>
    <template v-if="showProgress">
      <div class="search-progress">
        {{matchState.s1}}<br />
        {{matchState.s2}}
      </div>
    </template>
    <People-And-Movies :people="people" :movies="movies"/>
  </div>
</template>

<script>
import PeopleAndMovies from "./PeopleAndMovies";
export default {
  name: "Matches",
  props: ["searching", "people", "movies"],
  components: {
    PeopleAndMovies
  },
  data() {
    return {};
  },
  computed: {
    matchState: function() {
      if (this.searching) {
        return { s1: "Searching...", s2: "" };
      }
      return {
        s1: "There are zero matches.",
        s2: "Use the form to search for People or Movies."
      };
    },
    showProgress: function() {
      if (this.people.length > 0 || this.movies.length > 0) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style>
.MatchesBG {
  width: 582px;
  max-height: 582px;
  border-radius: 4px;
  margin-top: 2rem;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;
}

.Results {
  text-align: left;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin: 2rem 0 0.5rem 2rem;
}

.divider {
  width: 522px;
  height: 1px;
  background-color: #c4c4c4;
  margin-left: 2rem;
}

div.search-progress {
  width: 324px;
  height: 35px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c4c4;
  align-self: center;
  margin-top: 40%;
}
</style>