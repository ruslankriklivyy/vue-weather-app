<template>
  <div class="main">
    <div class="left-section">
      <div class="left-section__content">
        <input-search />
        <current-weather />
      </div>
    </div>
    <div class="right-section"></div>
  </div>
</template>

<script>
import InputSearch from './components/InputSearch.vue';
import CurrentWeather from './components/CurrentWeather.vue';

export default {
  name: 'App',
  components: {
    InputSearch,
    CurrentWeather,
  },
};
</script>

<style CurrentWeather lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: #f9fafc;
}
.main {
  display: flex;
}
.left-section {
  padding-top: 25px;
  width: 25%;
  height: 100vh;
  background: #fff;
  &__content {
    padding: 20px;
  }
}
.right-section {
  width: 75%;
  height: 100vh;
}
</style>
