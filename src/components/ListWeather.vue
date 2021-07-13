<template>
  <div class="list">
    <list-weather-item
      v-for="item in weather"
      :key="item"
      :temp="item.temp"
      :currentUnit="currentUnit"
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
  data() {
    return {
      tempDay: 0,
      tempNight: 0,
    };
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
