<template>
  <div class="person-details">
    <div class="DetailsBG">
      <h1 class="person-name">{{attributes.title}}</h1>
      <div id="person-details">
        <h2 class="details">Opening Crawl</h2>
        <div class="divider-person-stats"></div>
        <div class="opening-crawl-container">
          {{attributes.opening_crawl}}
        </div>
      </div>
      <div id="person-movies">
        <h2 class="details">Characters</h2>
        <div class="divider-person-stats"></div>
        <div class="char-container">
          <span v-for="(char,idx) in allChars" :key="idx">
            <router-link :to="{name: 'PersonDetails', params:{person:char}}">
              {{char.name}}
            </router-link>
          </span>
        </div>
      </div>
      <button class="Rectangle-BTS">
        <router-link :to="{name: 'main'}">
          <span class="BACK-TO-SEARCH">BACK TO SEARCH</span>
        </router-link>
      </button>
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
  async mounted() {
    try {
      const chars = await getCharsOfMovieService(this.attributes.characters);
      console.log(chars);
      this.allChars = chars;
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
  width: 94px;
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

.opening-crawl-container {
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
}

.char-container {
  width: 322px;
  height: 124px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0094ff;
}
.char-container .text-style-1 {
  color: #383838;
}
</style>
