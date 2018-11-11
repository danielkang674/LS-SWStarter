<template>
  <div id="app">
    <header>
      <h1 class="SWStarter">SWStarter</h1>
    </header>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500,600,700");

body {
  width: 100%;
  background-color: #ededed;
  overflow: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 95vh;
  background-color: #ededed;
}

header {
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 0 0 #dadada;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow: hidden;
  margin: -0.5rem 0 0 -0.5rem;
}

.SWStarter {
  text-align: center;
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
