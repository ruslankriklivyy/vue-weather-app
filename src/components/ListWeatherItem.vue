<template>
  <div class="list-item">
    <div class="list-item__day">
      {{ currentType === 'Week' ? new Date(weatherDate * 1000).toString().slice(0, 4) : getTime }}
    </div>
    <div class="list-item__img">
      <img :src="weatherImg" alt="cloud svg" />
    </div>
    <div class="list-item__temperature">
      {{ currentType === 'Week' ? getCurrentTemp(temp.max) : getCurrentTemp(temp) }}°
      <span v-if="currentType === 'Week'">{{ getCurrentTemp(temp.min) }}°</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getTemp, getCreatedTime } from '../utils/utils';
import { changeWeatherImg } from '../utils/changeWeatherImg';

export default {
  props: {
    temp: {
      type: Object,
      required: true,
    },
    weatherId: {
      type: Number,
      required: true,
    },
    weatherDate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      weatherImg: '',
    };
  },
  mounted() {
    this.weatherImg = changeWeatherImg(this.weatherId);
  },
  methods: {
    getCurrentTemp(temp) {
      return getTemp(this.currentUnit, temp);
    },
  },
  computed: {
    getTime() {
      return getCreatedTime(new Date(this.weatherDate * 1000));
    },
    ...mapState({
      currentUnit: (state) => state.weather.currentUnit,
      currentType: (state) => state.weather.currentType,
    }),
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  text-align: center;
  padding: 15px;
  width: 130px;
  height: 180px;
  background: #fff;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
  &__day {
    font-weight: 500;
    font-size: 18px;
  }
  &__img {
    width: 70px;
    height: 70px;
    margin: 20px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__temperature {
    font-weight: 500;
    font-size: 17px;
    span {
      opacity: 0.5;
      margin-left: 4px;
    }
  }
}
</style>
