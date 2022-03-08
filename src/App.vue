<template>
  <h1 class="text-center pb-6 text-primary-orange">⚡️ Proyect Zeus ⚡️</h1>
  <div class="flex flex-row ml-[30%] mb-4">
    <router-link class="ml-12" to="/">Home</router-link>
    <br />
    <router-link class="ml-12" to="/manage">Manage</router-link>
    <br />
    <router-link class="ml-12" to="/trip/1">Trip 1</router-link>
    <br />
    <router-link class="ml-12" to="/trip/2">Trip 2</router-link>
  </div>
  <hr class="border-[#f25f4c]" />
  <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
a {
  font-family: Gotham-med;
}
a:hover {
  color: #ff8906;
}
.router-link-exact-active {
  color: #ff8906;
}
</style>
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
  color: white;
  /* color: #ff8906; */
  background-color: #0f0e17;
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
