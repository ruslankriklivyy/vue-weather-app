<template>
  <div class="main">
    <div class="left-section">
      <div class="content">
        <input-search />
        <current-weather />
      </div>
    </div>
    <div class="right-section">
      <div class="content">
        <picker />
        <list-weather />
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from './components/InputSearch.vue';
import CurrentWeather from './components/CurrentWeather.vue';
import ListWeather from './components/ListWeather.vue';
import Picker from './components/Picker.vue';

export default {
  name: 'App',
  components: {
    InputSearch,
    CurrentWeather,
    ListWeather,
    Picker,
  },
};
</script>

, ListWeather<style CurrentWeather lang="scss">
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
  padding-top: 15px;
  width: 30%;
  height: 100vh;
  background: #fff;
}
.content {
  padding: 30px;
}
.right-section {
  width: 70%;
  height: 100vh;
  padding-top: 15px;
}
</style>
