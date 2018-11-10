<template>
  <div id="app">
    <header>
      <h1 class="SWStarter">SWStarter</h1>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  width: 1440px;
  height: 50px;
  box-shadow: 0 2px 0 0 #dadada;
  background-color: #ffffff;
}

.SWStarter {
  width: 98px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0ab463;
}
</style>
