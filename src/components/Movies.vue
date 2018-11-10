<template>
  <ul class="nobull">
    <li v-for="(movie, idx) in movies" :key=idx>
      {{movie.title}}
      <button class="Rectangle-21"><span class="SEE-DETAILS">SEE DETAILS</span></button>
    </li>
    <div class="divider"></div>
  </ul>
</template>

<script>
export default {
  name: "Movies",
  props: ["movies"]
};
</script>

<style>
.nobull {
  list-style-type: none;
}

.Rectangle-21 {
  width: 134px;
  height: 34px;
  border-radius: 17px;
  background-color: #0ab463;
}

.SEE-DETAILS {
  width: 94px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
</style>