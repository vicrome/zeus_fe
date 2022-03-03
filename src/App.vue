<template>
  <h1 class="text-center pb-6">⚡️ Proyect Zeus ⚡️</h1>
  <hr />
  <h2 class="text-white font-bold text-center pt-6 pb-6">Plan your next trip!! 🔥🔥</h2>

  <div class="flex flex-row ml-[30%] mb-8">
    <router-link class="ml-12" to="/">Home</router-link>
    <br />
    <router-link class="ml-12" to="/trip/1">Trip (HW)</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-top: 50px;
  /* font-family: Gotham-med; */
  font-size: large;
  font-weight: 500;
}
html {
  color: #cccf21;
  background-color: #233241;
  font-family: Gotham;
}

@font-face {
  font-family: Gotham;
  src: url("@/assets/fonts/Gotham/Gotham-Light.otf") format("opentype");
}

@font-face {
  font-family: Gotham-med;
  src: url("@/assets/fonts/Gotham/Gotham-Medium.otf") format("opentype");
}
</style>
