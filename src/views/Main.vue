<template>
  <div class="main">
    <SearchContainer :getSWData="getSWData" :searching="searching"/>
    <Matches :searching="searching"/>
  </div>
</template>

<script>
import SearchContainer from "../components/SearchContainer";
import Matches from "../components/Matches";
export default {
  name: "main",
  components: {
    SearchContainer,
    Matches
  },
  data() {
    return {
      searching: false
    };
  },
  methods: {
    getSWData(query, option) {
      this.searching = true;
      console.log(query, option);
    }
  }
};
</script>

<style>
</style>
