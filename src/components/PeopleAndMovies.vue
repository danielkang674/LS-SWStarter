<template>
  <div v-if="people.length > 0 || movies.length > 0">
    <div v-for="(person, idx) in people" :key=idx>
      <div class="result-select">
        <span class="result-item">{{person.name}}</span>
        <router-link :to="{name: 'PersonDetails', params: {person}}">
          <button class="Rectangle-21">
            <span class="SEE-DETAILS">SEE DETAILS</span>
          </button>
        </router-link>
      </div>
      <div class="divider"></div>
    </div>
    <div v-for="(movie, idx) in movies" :key=idx>
      <div class="result-select">
        <span class="result-item">{{movie.title}}</span>
        <router-link :to="{name:'MovieDetails', params:{movie}}">
          <button class="Rectangle-21">
            <span class="SEE-DETAILS">SEE DETAILS</span>
          </button>
        </router-link>
      </div>
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

.Rectangle-21:hover {
  border: solid 1px #089954;
  background-color: #089954;
  cursor: pointer;
}

.divider {
  width: 522px;
  height: 1px;
  background-color: #c4c4c4;
}

.result-item {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-select {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem 0;
}
</style>