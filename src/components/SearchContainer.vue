<template>
  <div class="SearchContainer">
    <p class="What-are-you-searching-for">What are you searching for?</p>
    <form v-on:submit="SWFormSubmit()">
      <input type="radio" class="Ellipse" id="People" v-model="option" value="People">
      <label for="People" class="People">People</label>
      <input type="radio" class="Ellipse" id="Movies" v-model="option" value="Movies">
      <label for="Movies" class="Movies">Movies</label>
      <input type="text" class="Rectangle" v-model="query" :placeholder="placeholder">
      <button type="submit" :class="buttonClass" :disabled="disabled"><span class="SEARCH">SEARCH</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchContainer",
  props: ["getSWData", "searching"],
  data() {
    return {
      option: "People",
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
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #dadada;
  background-color: #ffffff;
}

.What-are-you-searching-for {
  width: 205px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #383838;
}

.Ellipse {
  width: 16px;
  height: 16px;
  border: solid 1px #c4c4c4;
  background-color: #ffffff;
}

.People {
  width: 51px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
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
}

.Rectangle {
  width: 350px;
  height: 40px;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px 0 rgba(132, 132, 132, 0.75);
  border: solid 1px #c4c4c4;
  background-color: #ffffff;
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
  width: 239px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c4c4;
}

.text-cursor {
  width: 8px;
  height: 23px;
}
</style>
