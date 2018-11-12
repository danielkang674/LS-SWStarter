<template>
  <div class="person-details">
    <div class="DetailsBG">
      <h1 class="person-name">{{attributes.name}}</h1>
      <div id="person-details">
        <h2 class="details">Details</h2>
        <div class="divider-person-stats"></div>
        <Person-Stats :attributes="attributes"/>
      </div>
      <div id="person-movies">
        <h2 class="details">Movies</h2>
        <div class="divider-person-stats"></div>
        <span class="loading-msg" v-if="!personMovies.length">Loading...</span>
        <Person-Movies :personMovies="personMovies"/>
      </div>
      <div id="person-router">
        <router-link :to="{name: 'main'}">
          <button class="Rectangle-BTS-Person">
              <span class="BACK-TO-SEARCH">BACK TO SEARCH</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonStats from "../components/PersonStats";
import PersonMovies from "../components/PersonMovies";
import getMoviesOfPerson from "../services/getMoviesOfPerson";
export default {
  name: "PersonDetails",
  components: {
    PersonStats,
    PersonMovies
  },
  data() {
    return {
      attributes: this.$attrs.person,
      personMovies: []
    };
  },
  async mounted() {
    try {
      const movies = await getMoviesOfPerson(this.attributes.films);
      this.personMovies = movies;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style>
div.person-details {
  width: 100%;
  height: 88vh;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.DetailsBG {
  width: 804px;
  height: 417px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1rem 1fr 90px 1fr;
  grid-template-rows: 20% 60% 20%;
  grid-template-areas:
    ". name . ."
    ". details . movies"
    ". router . .";
}

.person-name {
  text-align: left;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  grid-area: name;
  margin: 2rem 0 0 1rem;
}

.details {
  text-align: left;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-left: 1rem;
}

.divider-person-stats {
  width: 322px;
  height: 1px;
  background-color: #c4c4c4;
  margin-left: 1rem;
}

.Rectangle-BTS-Person {
  width: 187px;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0ab463;
  background-color: #0ab463;
  margin-left: 1rem;
}

.Rectangle-BTS-Person:hover {
  border: solid 1px #089954;
  background-color: #089954;
  cursor: pointer;
}

.BACK-TO-SEARCH {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}

#person-details {
  grid-area: details;
}

#person-movies {
  grid-area: movies;
}

#person-router {
  grid-area: router;
  display: flex;
}

a.router-link-active {
  height: 34px;
}
</style>
