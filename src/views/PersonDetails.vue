<template>
  <div class="person-details">
    <div class="DetailsBG">
    {{$attrs}}
    hi
    <button @click="seeThis()">See this</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonDetails",
  props: ["person"],
  methods: {
    seeThis: function() {
      console.log(this);
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
</style>
