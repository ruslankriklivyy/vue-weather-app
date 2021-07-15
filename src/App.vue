<template>
  <div class="main">
    <div class="left-section">
      <div class="content" v-if="currentWeather.current">
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
          :weather="currentWeather"
          :currentUnit="currentUnit"
          :currentType="currentType"
        />
        <div class="today-highlights">
          <uv-index
            v-if="currentWeather?.current?.uvi"
            :uvi="currentWeather.current.uvi"
            :currentWeather="currentWeather.current"
          />
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
import UvIndex from './components/UvIndexBlock.vue';
import { fetchCurrentWeather, fetchGeolocation } from './api/api';
import { getTemp } from './utils/utils';

export default {
  name: 'App',
  components: {
    InputSearch,
    CurrentWeather,
    ListWeather,
    Picker,
    UvIndex,
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
.today-highlights {
  display: flex;
  align-items: center;
  &-item {
    width: 260px;
    height: 210px;
    background: #ffffff;
    border-radius: 20px;
    cursor: default;
    margin-left: 30px;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
    }
    &:first-child {
      margin-left: 0;
    }
    &__name {
      font-weight: 500;
      font-size: 24px;
    }
  }
  &__UVIndex {
    height: 139px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }
}
.today-highlights__UVIndex__diagrams {
  position: relative;
  width: 210px;
  height: 100px;
}

.UVIndex__diagram {
  position: absolute;
  width: 210px;
  height: 100px;
  z-index: 5;
}
.UVIndex__diagram-main {
  position: absolute;
  width: 210px;
  height: 100px;
  z-index: 6;
}

.UVIndex__face {
  font-weight: 500;
  font-size: 16px;
  color: #bbbbbb;
  position: absolute;
  z-index: 7;
}

.UVIndex__title {
  font-weight: 500;
  font-size: 48px;
  position: absolute;
  z-index: 7;
  left: 90px;
}

.UVIndex__face.six {
  top: 25px;
  left: 67px;
}
.UVIndex__face.nine {
  top: 25px;
  left: 135px;
}
.UVIndex__face.twelve {
  top: 65px;
  left: 191px;
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
