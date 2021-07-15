<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">Min & Max temperature</div>
    <div class="temp-block">
      <div class="temp-block__item">
        <img src="../assets/cold.svg" alt="cold svg" />
        <div class="today-highlights-item__index">
          {{ getItemTemp(weatherMinTemp) }} <span class="temp-block__degree">°</span>
        </div>
      </div>
      <div class="temp-block__item">
        <img src="../assets/hot.svg" alt="hot svg" />
        <div class="today-highlights-item__index">
          {{ getItemTemp(weatherMaxTemp) }} <span class="temp-block__degree">°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTemp } from '../utils/utils';

export default {
  props: {
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
  methods: {
    getItemTemp(temp) {
      return getTemp(this.currentUnit, temp);
    },
  },
};
</script>

<style lang="scss" scoped>
.temp-block {
  &__degree {
    position: absolute;
    font-size: 45px;
  }
  &__item {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
