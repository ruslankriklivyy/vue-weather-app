<template>
  <div class="main" v-if="currentWeather?.current">
    <div class="left-section">
      <div class="content">
        <div class="top">
          <input-search />
          <button class="btn-home" @click="fetchDataWeather">
            <img src="./assets/home.svg" alt="home svg" />
          </button>
        </div>
        <cities />
        <current-weather
          v-if="country.country"
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
          :currentUnit="currentUnit"
          :tempMax="tempMax"
          :currentType="currentType"
          :currentWeather="currentWeather"
          @update:currentUnit="setCurrentUnit"
          @update:currentType="setCurrentType"
          @update:tempMax="setTempMax"
        />
        <list-weather v-if="currentWeather?.current" />
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
import { mapState, mapActions, mapMutations } from 'vuex';

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
  created() {
    this.fetchDataWeather();
  },
  methods: {
    ...mapMutations({
      setCurrentUnit: 'weather/setCurrentUnit',
      setCurrentType: 'weather/setCurrentType',
      setTempMax: 'weather/setTempMax',
    }),
    ...mapActions({
      fetchDataWeather: 'weather/fetchDataWeather',
    }),
  },
  computed: {
    ...mapState({
      currentWeather: (state) => state.weather.currentWeather,
      currentCity: (state) => state.weather.currentCity,
      currentUnit: (state) => state.weather.currentUnit,
      currentType: (state) => state.weather.currentType,
      country: (state) => state.weather.country,
      tempMax: (state) => state.weather.tempMax,
      tempMin: (state) => state.weather.tempMin,
    }),
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
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-home {
  border: 2px solid transparent;
  background: #f9fafc;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 50px;
  height: 48px;
  margin-left: 10px;
  &:hover {
    border-color: #66a0fd;
  }
  img {
    opacity: 0.7;
  }
}
.title {
  font-size: 22px;
  margin: 30px 0 20px 0;
  opacity: 0.5;
  @media (max-width: 769px) {
    text-align: center;
  }
}
.main {
  display: flex;
  @media (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
  }
}
.left-section {
  position: fixed;
  padding-top: 15px;
  width: 25%;
  min-height: 100vh;
  background: #fff;
  @media (max-width: 992px) {
    position: static;
    min-height: 100%;
    background: transparent;
    width: 100%;
    text-align: center;
  }
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
  @media (max-width: 992px) {
    width: 100%;
  }
}
</style>
