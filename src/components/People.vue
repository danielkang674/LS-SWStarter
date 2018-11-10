<template>
  <ul class="nobull">
    <li v-for="(person, idx) in people" :key=idx>
      {{person.name}}
      <a class="Rectangle-21"><span class="SEE-DETAILS">SEE DETAILS</span></a>
    </li>
    <div class="divider"></div>
  </ul>
</template>

<script>
export default {
  name: "People",
  props: ["people"]
};
</script>

<style>
.nobull {
  list-style-type: none;
}

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
  background-color: #0ab463;
}
</style>