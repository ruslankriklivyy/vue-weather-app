<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">Sunrise & Sunset</div>
    <div class="today-highlights__sunrise">
      <div class="today-highlights__sunrise-item">
        <img class="today-highlights__sunrise-img" src="../assets/sunrise.png" alt="sunrise png" />
        <span>{{ sunrise }}</span>
      </div>
      <div class="today-highlights__sunrise-item">
        <img class="today-highlights__sunset-img" src="../assets/sunrise.png" alt="sunrise png" />
        <span>{{ sunset }}</span>
      </div>
    </div>
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
      sunrise: '',
      sunset: '',
    };
  },
  mounted() {
    let dateObj = new Date(this.currentWeather.sunrise * 1000);
    this.sunrise = dateObj.toLocaleTimeString().slice(0, 5);
    dateObj = new Date(this.currentWeather.sunset * 1000);
    this.sunset = dateObj.toLocaleTimeString().slice(0, 5);
  },
};
</script>

<style lang="scss" scoped>
.today-highlights__sunset-img {
  transform: rotate(180deg);
}
.today-highlights__sunrise {
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 10px;
    }
    span {
      font-size: 24px;
    }
  }
}
</style>
