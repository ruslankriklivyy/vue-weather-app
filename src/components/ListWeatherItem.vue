<template>
  <div class="list-item">
    <div class="list-item__day">
      {{ currentType === 'Week' ? new Date(weatherDate * 1000).toString().slice(0, 4) : getTime() }}
    </div>
    <div class="list-item__img">
      <img src="../assets/cloud.svg" alt="cloud svg" />
    </div>
    <div class="list-item__temperature">
      {{ getItemTemp(temp.max) }}° <span>{{ getItemTemp(temp.min) }}°</span>
    </div>
  </div>
</template>

<script>
import { getTemp, getCreatedTime } from '../utils/utils';

export default {
  props: {
    temp: {
      type: Object,
      required: true,
    },
    currentUnit: {
      type: String,
      required: true,
    },
    currentType: {
      type: String,
      required: true,
    },
    weatherDate: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getItemTemp(temp) {
      return getTemp(this.currentUnit, temp);
    },
    getTime() {
      return getCreatedTime(new Date(this.weatherDate * 100));
    },
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
