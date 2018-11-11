<template>
  <div class="SearchContainer">
    <p class="search-container-title">What are you searching for?</p>
    <form v-on:submit.prevent="SWFormSubmit()">
      <div id="radioBtns">
      <input type="radio" class="Ellipse" id="People" v-model="option" value="people">
      <label for="People" class="People">People</label>
      <input type="radio" class="Ellipse" id="Movies" v-model="option" value="movies">
      <label for="Movies" class="Movies">Movies</label>
      </div>
      <input type="text" class="Rectangle" v-model="query" :placeholder="placeholder">
      <button id="searchBtn" type="submit" :class="buttonClass" :disabled="disabled"><span class="SEARCH">{{searchProgress}}</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchContainer",
  props: ["getSWData", "searching"],
  data() {
    return {
      option: "people",
      query: ""
    };
  },
  computed: {
    placeholder: function() {
      if (this.option === "People") {
        return "e.g. Chewbacca, Yoda, Boba, Fett";
      }
      return "e.g. The Empire Strikes Back";
    },
    disabled: function() {
      if (this.query === "") {
        return true;
      }
      return false;
    },
    buttonClass: function() {
      if (this.query === "") {
        return "SearchButton-Disabled";
      }
      return "SearchButton-Enabled";
    },
    searchProgress: function() {
      if (this.searching) {
        return "SEARCHING...";
      }
      return "SEARCH";
    }
  },
  methods: {
    SWFormSubmit: function() {
      this.getSWData(this.query, this.option);
    }
  }
};
</script>

<style>
.SearchContainer {
  width: 410px;
  height: 230px;
  margin-top: 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
}

.search-container-title {
  text-align: left;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #383838;
  margin: 2rem 0 1rem 2rem;
}

.Ellipse {
  width: 16px;
  height: 16px;
  border: solid 1px #c4c4c4;
  background-color: #ffffff;
}

.People {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin: 0 2rem 0 0.3rem;
}

.Movies {
  width: 52px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-left: 0.3rem;
}

.Rectangle {
  width: 350px;
  height: 40px;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #c4c4c4;
  background-color: #ffffff;
  margin-bottom: 1rem;
}

.SearchButton-Disabled {
  width: 350px;
  height: 34px;
  border-radius: 20px;
  border: solid 1px #c4c4c4;
  background-color: #c4c4c4;
}

.SearchButton-Enabled {
  width: 350px;
  height: 34px;
  border-radius: 20px;
  border: solid 1px #0ab463;
  background-color: #0ab463;
}

.SEARCH {
  width: 61px;
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

input::placeholder {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c4c4;
  padding-left: 1rem;
}

.text-cursor {
  width: 8px;
  height: 23px;
}

#radioBtns {
  text-align: left;
  margin: 0 0 1rem 1.6rem;
  display: flex;
  align-items: center;
}

#searchBtn {
  grid-area: searchBtn;
}

label {
  padding-top: 0.1rem;
}
</style>
