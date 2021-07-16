<template>
  <div class="list" v-if="currentType === 'Week'">
    <transition-group name="list">
      <list-weather-item
        v-for="item in weather?.daily?.slice(1, 8)"
        :key="item"
        :temp="item.temp"
        :currentUnit="currentUnit"
        :weatherDate="item.dt"
        :currentType="currentType"
        :weatherId="item.weather[0].id"
      />
    </transition-group>
  </div>
  <div class="list" v-else>
    <transition-group name="list">
      <list-weather-item
        v-for="item in weather?.hourly?.slice(1, 8)"
        :key="item"
        :temp="item.temp"
        :currentUnit="currentUnit"
        :weatherDate="item.dt"
        :currentType="currentType"
        :weatherId="item.weather[0].id"
      />
    </transition-group>
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
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.8s ease;
}
.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
