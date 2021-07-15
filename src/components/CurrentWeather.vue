<template>
  <div class="current-weather">
    <img :src="weatherImg" class="current-weather__img" alt="weather svg" />
    <div class="current-weather__info">
      <div class="current-weather__info-city">
        {{ countryInfo?.country }}, <span>{{ countryInfo?.city }}</span>
      </div>
      <div class="current-weather__info-degree">
        {{ tempMax }} <span>°{{ currentUnit }}</span>
      </div>
      <div class="current-weather__info-day">
        {{ datOfWeek[day - 1] }}, <span>{{ currentTime }}</span>
      </div>
      <div class="current-weather__info-temperature">
        <img src="../assets/cloudy.svg" alt="cloudy svg" />
        <span>Clouds - {{ currentWeather?.clouds }}%</span>
      </div>
      <div class="current-weather__info-percent">
        <img src="../assets/radio_filled.svg" alt="radio_filled svg" />
        <span>{{ currentWeather?.weather[0]?.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCreatedTime } from '../utils/utils';
import { changeWeatherImg } from '../utils/changeWeatherImg';

export default {
  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
    countryInfo: {
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
      weatherImg: '',
    };
  },
  mounted() {
    this.weatherImg = changeWeatherImg(this.currentWeather.weather[0].id);
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
  &__img {
    display: block;
    width: 80%;
    height: 80%;
    margin: 20px 0;
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
    &-temperature,
    &-percent {
      display: flex;
      align-items: center;
      span::first-letter {
        text-transform: uppercase;
      }
      img {
        width: 30px;
        height: 30px;
        margin-right: 3px;
      }
    }
  }
}
</style>
