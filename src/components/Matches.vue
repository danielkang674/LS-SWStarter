<template>
  <div class="MatchesBG">
    <h2 class="Results">Results</h2>
    <div class="divider"></div>
    <template>
      <h3 class="There-are-zero-matches-Use-the-form-to-search-for">{{matchState}}</h3>
    </template>
    <People :people="people"/>
    <Movies :movies="movies"/>
  </div>
</template>

<script>
import People from "./People";
import Movies from "./Movies";
export default {
  name: "Matches",
  props: ["searching", "people", "movies"],
  components: {
    People,
    Movies
  },
  data() {
    return {};
  },
  computed: {
    matchState: function() {
      if (this.Searching) {
        return "Searching...";
      }
      return "There are zero matches. Use the form to search for People or Movies.";
    }
  }
};
</script>

<style>
.MatchesBG {
  width: 582px;
  height: 582px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
}

.Results {
  width: 71px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.divider {
  width: 522px;
  height: 1px;
  background-color: #c4c4c4;
}

.There-are-zero-matches-Use-the-form-to-search-for {
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
}
</style>