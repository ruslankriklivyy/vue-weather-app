<template>
  <div class="list" v-if="currentType === 'Week'">
    <list-weather-item
      v-for="item in weather?.daily?.slice(1, 8)"
      :key="item"
      :temp="item.temp"
      :weatherDate="item.dt"
      :weatherId="item.weather[0].id"
    />
  </div>
  <div class="list" v-else>
    <list-weather-item
      v-for="item in weather?.hourly?.slice(1, 8)"
      :key="item"
      :temp="item.temp"
      :weatherDate="item.dt"
      :weatherId="item.weather[0].id"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListWeatherItem from './ListWeatherItem.vue';

export default {
  components: {
    ListWeatherItem,
  },
  computed: {
    ...mapState({
      weather: (state) => state.weather.currentWeather,
      currentType: (state) => state.weather.currentType,
    }),
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  @media (max-width: 456px) {
    justify-content: center;
  }
}
</style>
