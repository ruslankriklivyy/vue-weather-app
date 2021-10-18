<template>
  <div class="list" v-if="currentType === 'Week'">
    <list-weather-item
      v-for="item in weather?.daily?.slice(1, 8)"
      :key="item"
      :temp="item.temp"
      :currentUnit="currentUnit"
      :weatherDate="item.dt"
      :currentType="currentType"
      :weatherId="item.weather[0].id"
    />
  </div>
  <div class="list" v-else>
    <list-weather-item
      v-for="item in weather?.hourly?.slice(1, 8)"
      :key="item"
      :temp="item.temp"
      :currentUnit="currentUnit"
      :weatherDate="item.dt"
      :currentType="currentType"
      :weatherId="item.weather[0].id"
    />
  </div>
</template>

<script>
import ListWeatherItem from './ListWeatherItem.vue';

export default {
  components: {
    ListWeatherItem,
  },
  props: {
    weather: {
      type: Object,
      required: true,
    },
    currentType: {
      type: String,
      required: true,
    },
    currentUnit: {
      type: String,
      required: true,
    },
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
