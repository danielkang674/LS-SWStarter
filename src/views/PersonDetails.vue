<template>
  <div class="person-details">
    <div class="DetailsBG">
      <h1 class="person-name">{{attributes.name}}</h1>
      <div id="person-details">
        <h2 class="details">Details</h2>
        <Person-Stats :attributes="attributes"/>
      </div>
      <div id="person-movies">
        <h2 class="details">Movies</h2>
        <div class="divider-person-stats"></div>
        <Person-Movies :personMovies="personMovies"/>
      </div>
      <button class="Rectangle-BTS"><span class="BACK-TO-SEARCH">BACK TO SEARCH</span></button>
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
      console.log(movies);
      this.personMovies = movies;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style>
.person-details {
  width: 1440px;
  height: 900px;
  background-color: #ededed;
}

.DetailsBG {
  width: 804px;
  height: 417px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
}

.person-name {
  width: 200px;
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

.details {
  width: 59px;
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

.divider-person-stats {
  width: 322px;
  height: 1px;
  background-color: #c4c4c4;
}

.Rectangle-BTS {
  width: 187px;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0ab463;
  background-color: #0ab463;
}

.BACK-TO-SEARCH {
  width: 132px;
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
