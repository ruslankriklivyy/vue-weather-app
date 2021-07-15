<template>
  <div class="main">
    <div class="left-section">
      <div class="content" v-if="currentWeather.current">
        <input-search v-model="searchQuery" />
        <cities
          v-if="searchPlaces.length > 0"
          :searchPlaces="searchPlaces"
          v-model:currentCity="currentCity"
        />
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
          :weather="currentWeather"
          :currentUnit="currentUnit"
          :currentType="currentType"
        />
        <highlights
          v-if="currentWeather?.current"
          :weatherMinTemp="currentWeather.daily[0].temp.min"
          :weatherMaxTemp="currentWeather.current.temp"
          :currentUnit="currentUnit"
          :currentWeather="currentWeather.current"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from './components/InputSearch.vue';
import CurrentWeather from './components/CurrentWeather.vue';
import ListWeather from './components/ListWeather.vue';
import Picker from './components/Picker.vue';
import Highlights from './components/Highlights.vue';
import Cities from './components/Cities.vue';
import { fetchCurrentWeather, fetchGeolocation, fetchBySearchCity } from './api/api';
import { getTemp } from './utils/utils';

export default {
  name: 'App',
  components: {
    InputSearch,
    CurrentWeather,
    ListWeather,
    Picker,
    Highlights,
    Cities,
  },
  data() {
    return {
      currentWeather: {},
      currentCity: {},
      searchQuery: '',
      searchPlaces: [],
      currentUnit: 'C',
      currentType: 'Week',
      country: {},
      tempMax: 0,
      tempMin: 0,
    };
  },
  mounted() {
    if (localStorage.getItem('geolocation')) {
      const countryInfo = JSON.parse(localStorage.getItem('geolocation'));
      this.country = countryInfo;
      const loc = fetchGeolocation();
      fetchCurrentWeather(loc[0], loc[1]).then((res) => {
        this.currentWeather = res;
        this.tempMax = getTemp(this.currentUnit, res.current.temp);
        this.tempMin = getTemp(this.currentUnit, res.daily[0].temp.min);
      });
    } else {
      fetchGeolocation().then((res) => {
        this.country = res;
        fetchCurrentWeather(res[0], res[1]).then((res) => {
          this.currentWeather = res;
          this.tempMax = getTemp(this.currentUnit, res.current.temp);
          this.tempMin = getTemp(this.currentUnit, res.daily[0].temp.min);
        });
      });
    }
  },
  watch: {
    searchQuery(val) {
      if (val !== '') {
        this.searchPlaces = fetchBySearchCity(val).then((res) => (this.searchPlaces = res));
      } else {
        this.searchPlaces = [];
      }
    },
    currentCity(obj) {
      const newObj = {
        city: obj.city,
        country: obj.countryCode,
        loc: `${obj.latitude},${obj.longitude}`,
      };
      this.country = newObj;
      fetchCurrentWeather(obj.latitude, obj.longitude).then((res) => {
        this.currentWeather = res;
        this.tempMax = getTemp(this.currentUnit, res.current.temp);
        this.tempMin = getTemp(this.currentUnit, res.daily[0].temp.min);
      });
      this.searchPlaces = [];
      this.searchQuery = '';
    },
  },
};
</script>

<style lang="scss">
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

.title {
  font-size: 22px;
  margin: 30px 0 20px 0;
  opacity: 0.5;
}
.main {
  display: flex;
}
.left-section {
  position: fixed;
  padding-top: 15px;
  width: 25%;
  min-height: 100vh;
  background: #fff;
}
.content {
  padding: 30px;
  position: relative;
}
.right-section {
  width: 75%;
  margin-left: auto;
  height: 100vh;
  padding-top: 15px;
}
</style>
