<template>
  <div class="current-weather">
    <img src="../assets/cloud.svg" alt="cloud svg" />
    <div class="current-weather__info">
      <div class="current-weather__info-city">
        {{ currentWeather?.sys?.country }}, <span>{{ currentWeather?.name }}</span>
      </div>
      <div class="current-weather__info-degree">
        {{ tempMax }} <span>°{{ currentUnit }}</span>
      </div>
      <div class="current-weather__info-day">
        {{ datOfWeek[day - 1] }}, <span>{{ currentTime }}</span>
      </div>
      <div class="current-weather__info-temperature">
        Clouds - {{ currentWeather?.clouds?.all }}%
      </div>
      <div class="current-weather__info-percent">Rain - 30%</div>
    </div>
  </div>
</template>

<script>
import { getCreatedTime } from '../utils/utils';

export default {
  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
    tempMax: {
      type: Number,
      required: true,
    },
    currentUnit: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      datOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
      day: new Date().getDay(),
      currentTime: getCreatedTime(new Date().getTime()),
    };
  },
  created() {
    setInterval(() => {
      this.currentTime = getCreatedTime(new Date().getTime());
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.current-weather {
  img {
    display: block;
    width: 90%;
    height: 80%;
  }
  &__info {
    &-city {
      font-size: 28px;
      margin-bottom: 10px;
    }
    &-degree {
      display: flex;
      font-size: 58px;
      margin-bottom: 10px;
      span {
        margin-top: 7px;
        font-size: 31px;
      }
    }
    &-day {
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 20px;
      span {
        opacity: 0.7;
      }
    }
  }
}
</style>
