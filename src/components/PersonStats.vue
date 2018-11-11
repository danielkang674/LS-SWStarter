<template>
  <div class="person-stats">
    <ul>
      <li>Birth Year: {{attributes.birth_year}}</li>
      <li>Gender: {{attributes.gender}}</li>
      <li>Eye Color: {{attributes.eye_color}}</li>
      <li>Hair Color: {{attributes.hair_color}}</li>
      <li>Height: {{attributes.height}}</li>
      <li>Mass: {{attributes.mass}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonStats",
  props: ["attributes"]
};
</script>

<style>
.person-stats {
  text-align: left;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin: -0.5rem 0 0 -1.5rem;
}

ul {
  list-style-type: none;
}
</style>