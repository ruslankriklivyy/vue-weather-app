<template>
  <div class="list">
    <list-weather-item />
  </div>
</template>

<script>
import ListWeatherItem from './ListWeatherItem.vue';

export default {
  components: {
    ListWeatherItem,
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
</style>
