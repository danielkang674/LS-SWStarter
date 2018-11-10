<template>
  <div class="main">
    <div class="SearchContainer">
      <p class="What-are-you-searching-for">What are you searching for?</p>
      <form>
        <input type="radio" class="Ellipse" id="People" v-model="option" value="People">
        <label for="People" class="People">People</label>
        <input type="radio" class="Ellipse" id="Movies" v-model="option" value="Movies">
        <label for="Movies" class="Movies">Movies</label>
        <input type="text" class="Rectangle" v-model="query" :placeholder="placeholder">
        <button type="submit" class="SearchButton-Disabled" :disabled="disabled"><span class="SEARCH">SEARCH</span></button>
      </form>
      <span>{{option}}{{query}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      option: "People",
      query: "",
      placeholder: "e.g. Chewbacca, Yoda, Boba, Fett",
      disabled: "disabled"
    };
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
  background-color: #0094ff;
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

.eg-Chewbacca-Yoda-Boba-Fett {
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
</style>
