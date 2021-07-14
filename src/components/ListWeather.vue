<template>
  <div class="list">
    <list-weather-item
      v-for="item in weather?.slice(1, 8)"
      :key="item.dt"
      :temp="item.temp"
      :currentUnit="currentUnit"
      :weatherDate="item.dt"
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
      type: Array,
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
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
