<template>
  <div class="main">
    <SearchContainer />
    <Matches />
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
    return {};
  }
};
</script>

<style>
</style>
