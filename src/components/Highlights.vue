<template>
  <div class="today-highlights">
    <uv-index :uvi="currentWeather.uvi" :currentWeather="currentWeather" />
    <wind-status-block :currentWeather="currentWeather" />
    <sunrise-sunset-block :currentWeather="currentWeather" />
    <humidity :humidity="currentWeather.humidity" />
    <visibility :visibility="currentWeather.visibility" />
    <max-min-temp
      :currentUnit="currentUnit"
      :weatherMinTemp="weatherMinTemp"
      :weatherMaxTemp="weatherMaxTemp"
    />
  </div>
</template>

<script>
import UvIndex from '../components/UvIndexBlock.vue';
import WindStatusBlock from '../components/WindStatusBlock.vue';
import SunriseSunsetBlock from '../components/SunriseSunsetBlock.vue';
import Humidity from '../components/Humidity.vue';
import Visibility from '../components/Visibility.vue';
import MaxMinTemp from '../components/MaxMinTemp.vue';

export default {
  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
    weatherMinTemp: {
      type: Number,
      required: true,
    },
    weatherMaxTemp: {
      type: Number,
      required: true,
    },
    currentUnit: {
      type: String,
      required: true,
    },
  },
  components: {
    UvIndex,
    WindStatusBlock,
    SunriseSunsetBlock,
    Humidity,
    Visibility,
    MaxMinTemp,
  },
};
</script>

<style lang="scss">
.today-highlights {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &-item {
    width: 260px;
    height: 210px;
    background: #ffffff;
    border-radius: 20px;
    cursor: default;
    margin-right: 30px;
    margin-bottom: 30px;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
    }
    &__humidity {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__percent {
      position: absolute;
      top: 5px;
      right: -18px;
      font-size: 22px !important;
    }
    &__index {
      position: relative;
      font-size: 44px;
      span {
        font-size: 20px;
      }
    }
    &__descr {
      font-size: 18px;
    }
    &__name {
      font-weight: 500;
      opacity: 0.6;
      font-size: 21px;
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
</style>
