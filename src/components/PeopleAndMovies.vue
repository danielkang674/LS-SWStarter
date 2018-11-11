<template>
  <div>
    <div v-for="(person, idx) in people" :key=idx>
      <span class="result-item">{{person.name}}</span>
      <button class="Rectangle-21">
        <router-link :to="{name: 'PersonDetails', params: {person}}">
          <span class="SEE-DETAILS">SEE DETAILS</span>
        </router-link>
      </button>
      <div class="divider"></div>
    </div>
    <div v-for="(movie, idx) in movies" :key=idx>
      <span class="result-item">{{movie.title}}</span>
      <button class="Rectangle-21"><span class="SEE-DETAILS">SEE DETAILS</span></button>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleAndMovies",
  props: ["people", "movies"]
};
</script>

<style>
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

.Rectangle-21 {
  width: 134px;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0ab463;
  background-color: #0ab463;
}

.divider {
  width: 522px;
  height: 1px;
  background-color: #c4c4c4;
}

.result-item {
  width: 149px;
  height: 20px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
</style>