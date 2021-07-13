<template>
  <div class="head">
    <div class="pick-day">
      <button>Today</button>
      <button>Week</button>
    </div>
    <div class="pick-measur" :v-model="modelValue" :v-model:tempMax="tempMax">
      <button
        @click="changeCurrentUnit('C')"
        :class="{
          active: modelValue === 'C',
        }"
      >
        °C
      </button>
      <button
        @click="changeCurrentUnit('F')"
        :class="{
          active: modelValue === 'F',
        }"
      >
        °F
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    currentWeather: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeCurrentUnit(type) {
      if (type === 'C') {
        this.tempMax = Math.round(this.currentWeather.main.temp_max - 273.15);
      } else {
        this.tempMax = Math.round(1.8 * (this.currentWeather.main.temp_max - 273.15) + 32);
      }
      this.$emit('update:tempMax', this.tempMax);
      this.$emit('update:modelValue', type);
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pick-day {
  button {
    font-weight: 500;
    opacity: 0.5;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:first-child {
      margin-right: 20px;
    }
    &:hover {
      color: #66a0fd;
      opacity: 1;
    }
  }
}
.pick-measur {
  display: flex;
  align-items: center;
  button {
    font-weight: 500;
    opacity: 0.5;
    width: 50px;
    height: 50px;
    font-size: 22px;
    border: none;
    border-radius: 100%;
    background: #eeeff1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &:first-child {
      margin-right: 20px;
    }
    &:hover {
      background: #66a0fd;
      opacity: 1;
      color: #fff;
    }
    &.active {
      background: #66a0fd;
      opacity: 1;
      color: #fff;
    }
  }
}
</style>
