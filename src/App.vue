<template>
  <div class="main">
    <div class="left-section">
      <div class="content">
        <input-search />
        <current-weather
          :currentWeather="currentWeather.current"
          :tempMax="tempMax"
          :currentUnit="currentUnit"
          :countryInfo="country"
        />
      </div>
    </div>
    <div class="right-section">
      <div class="content">
        <picker
          v-model="currentUnit"
          v-model:tempMax="tempMax"
          v-model:currentType="currentType"
          :currentWeather="currentWeather"
        />
        <list-weather
          :weather="currentWeather.daily"
          :currentUnit="currentUnit"
          :currentType="currentType"
        />
        <div class="today-info">
          <div class="today-info__item"></div>
        </div>
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
import { getTemp } from './utils/utils';

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
      currentType: 'Week',
      country: {},
      tempMax: 0,
    };
  },
  mounted() {
    if (localStorage.getItem('geolocation')) {
      const countryInfo = JSON.parse(localStorage.getItem('geolocation'));
      this.country = countryInfo;
      const loc = fetchGeolocation();
      fetchCurrentWeather(loc[0], loc[1]).then((res) => {
        this.currentWeather = res;
        console.log(this.currentWeather);
        this.tempMax = getTemp(this.currentUnit, res.current.temp);
      });
    } else {
      fetchGeolocation().then((res) => {
        this.country = res;
        fetchCurrentWeather(res[0], res[1]).then((res) => {
          this.currentWeather = res;
          this.tempMax = getTemp(this.currentUnit, res.current.temp);
        });
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
  width: 27%;
  height: 100vh;
  background: #fff;
}
.content {
  padding: 30px;
}
.right-section {
  width: 73%;
  height: 100vh;
  padding-top: 15px;
}
</style>
