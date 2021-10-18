<template>
  <div class="head">
    <div class="pick-day">
      <button
        v-for="type in types"
        :key="type"
        :class="{
          active: type === currentType,
        }"
        @click="changeCurrentType(type)"
      >
        {{ type }}
      </button>
    </div>
    <div class="pick-measur">
      <button
        v-for="unit in units"
        :key="unit"
        @click="changeCurrentUnit(unit)"
        :class="{
          active: currentUnit === unit,
        }"
      >
        °{{ unit }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUnit: String,
    currentWeather: {
      type: Object,
      required: true,
    },
    currentType: {
      type: String,
      required: true,
    },
    tempMax: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      units: ['C', 'F'],
      types: ['Today', 'Week'],
    };
  },
  methods: {
    changeCurrentUnit(unit) {
      if (unit === 'C') {
        this.$emit('update:tempMax', Math.round(this.currentWeather.current.temp - 273.15));
      } else {
        this.$emit(
          'update:tempMax',
          Math.round(1.8 * (this.currentWeather.current.temp - 273.15) + 32),
        );
      }
      this.$emit('update:currentUnit', unit);
    },
    changeCurrentType(type) {
      this.$emit('update:currentType', type);
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
    font-weight: 600;
    opacity: 0.5;
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:first-child {
      margin-right: 20px;
    }
    &:hover {
      color: #66a0fd;
      opacity: 1;
    }
    &.active {
      color: #66a0fd;
      opacity: 1;
    }
  }
}
.pick-measur {
  display: flex;
  align-items: center;
  button {
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.4);
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
