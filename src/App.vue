<template>
  <div class="main">
    <div class="left-section">
      <div class="content">
        <input-search />
        <current-weather
          :currentWeather="currentWeather"
          :tempMax="tempMax"
          :currentUnit="currentUnit"
        />
      </div>
    </div>
    <div class="right-section">
      <div class="content">
        <picker v-model="currentUnit" v-model:tempMax="tempMax" :currentWeather="currentWeather" />
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
import { fetchCurrentWeather, fetchGeolocation } from './api/api';

export default {
  name: 'App',
  components: {
    InputSearch,
    CurrentWeather,
    ListWeather,
    Picker,
  },
  data() {
    return {
      currentWeather: {},
      currentUnit: 'C',
      tempMax: 0,
    };
  },
  mounted() {
    if (localStorage.getItem('geolocation')) {
      const loc = fetchGeolocation();
      fetchCurrentWeather(loc[0], loc[1]).then((res) => {
        this.currentWeather = res;
        if (this.currentUnit === 'C') {
          this.tempMax = Math.round(res.main.temp_max - 273.15);
        } else {
          this.tempMax = Math.round(1.8 * (res.main.temp_max - 273.15) + 32);
        }
      });
    } else {
      fetchGeolocation().then((res) => {
        fetchCurrentWeather(res[0], res[1]).then((res) => (this.currentWeather = res));
      });
    }
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
