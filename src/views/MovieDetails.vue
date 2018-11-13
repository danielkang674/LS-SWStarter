<template>
  <div class="movie-details">
    <div class="Movie-DetailsBG">
      <h1 class="movie-name">{{attributes.title}}</h1>
      <div id="movie-details">
        <h2 class="opening-crawl">Opening Crawl</h2>
        <div class="divider-crawl"></div>
        <div class="opening-crawl-container">
          <span style="white-space: pre;">{{attributes.opening_crawl}}</span>
        </div>
      </div>
      <div id="movie-chars">
        <h2 class="opening-crawl">Characters</h2>
        <div class="divider-crawl"></div>
        <span class="loading-msg" v-if="!allChars.length">Loading...</span>
        <div class="char-container">
          <span v-for="(char,idx) in allChars" :key="idx" class="router-chars">
            <router-link :to="{name: 'PersonDetails', params:{person:char}}">
              {{char.name}}<span v-if="idx < lastCharIdx">,</span>
            </router-link>
          </span>
        </div>
      </div>
      <div class="movie-BTS-container">
        <router-link :to="{name: 'main'}">
          <button class="Rectangle-BTS-Movie">
            <span class="BACK-TO-SEARCH">BACK TO SEARCH</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getCharsOfMovieService from "../services/getCharsOfMovieService";
export default {
  name: "MovieDetails",
  components: {},
  data() {
    return {
      attributes: this.$attrs.movie,
      allChars: []
    };
  },
  computed: {
    lastCharIdx: function() {
      return this.allChars.length - 1;
    }
  },
  async mounted() {
    try {
      const chars = await getCharsOfMovieService(this.attributes.characters);
      this.allChars = chars;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style>
.movie-details {
  width: 100%;
  height: 88vh;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Movie-DetailsBG {
  width: 804px;
  height: 567px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2rem 1fr 90px 1fr;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". movie-name . ."
    ". movie-details . movie-chars"
    ". movie-BTS-container . .";
}

.movie-name {
  text-align: left;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  grid-area: movie-name;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}

.opening-crawl {
  text-align: left;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}

.divider-crawl {
  width: 322px;
  height: 1px;
  background-color: #c4c4c4;
}

.Rectangle-BTS-Movie {
  width: 187px;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0ab463;
  background-color: #0ab463;
}

.Rectangle-BTS-Movie:hover {
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

.opening-crawl-container {
  text-align: left;
  width: 220px;
  height: 325px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 0.5rem;
}

.char-container {
  text-align: left;
  width: 322px;
  max-height: 325px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0094ff;
  margin-top: 0.5rem;
}

a {
  color: #0094ff;
}

span.router-chars > a {
  text-decoration: none;
}

#movie-details {
  grid-area: movie-details;
}

#movie-chars {
  grid-area: movie-chars;
}
.movie-BTS-container {
  grid-area: movie-BTS-container;
  display: flex;
}

.loading-msg {
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
