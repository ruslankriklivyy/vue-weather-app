<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">Wind Status</div>
    <div class="today-highlights-item__index">
      {{ currentWeather.wind_speed }} <span>km/h</span>
    </div>
    <p class="today-highlights-item__descr">{{ windStatus }}</p>
  </div>
</template>

<script>
export default {
  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      windStatus: 0,
      beaufortScale: [
        'Calm',
        'Light air',
        'Light breeze',
        'Gentle breeze',
        'Moderate breeze',
        'Fresh breeze',
        'Strong breeze',
        'High wind',
        'Fresh gale',
        'Strong gale',
        'Storm',
        'Violent storm',
        'Hurricane',
      ],
    };
  },
  mounted() {
    if (this.currentWeather.wind_speed >= 0 && this.currentWeather.wind_speed <= 12) {
      this.windStatus = this.beaufortScale[Math.round(this.currentWeather.wind_speed)];
    } else {
      if (this.currentWeather.wind_speed > 12) {
        this.windStatus == this.beaufortScale[12];
      }
      if (this.currentWeather.wind_speed < 0) {
        this.windStatus == this.beaufortScale[0];
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
