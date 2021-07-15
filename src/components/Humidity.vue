<template>
  <div class="today-highlights-item">
    <div class="today-highlights-item__name">Humidity</div>
    <div class="today-highlights-item__humidity">
      <div class="today-highlights-item__index">
        {{ humidity }} <span class="today-highlights-item__percent">%</span>
      </div>
      <div className="humidity-vizualization">
        <div className="humidity-vizualization__round" :style="{ height: humidity + '%' }"></div>
      </div>
    </div>
    <div class="today-highlights-item__descr">{{ humidityStatus }}</div>
  </div>
</template>

<script>
export default {
  props: {
    humidity: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      humidityStatus: '',
      vizHeight: 0,
    };
  },
  mounted() {
    if (this.humidity <= 50) {
      this.humidityStatus = 'Dry';
    }
    if (this.humidity > 50 && this.humidity <= 55) {
      this.humidityStatus = 'Pleasant';
    }
    if (this.humidity > 55 && this.humidity <= 60) {
      this.humidityStatus = 'Comfortable';
    }
    if (this.humidity > 60 && this.humidity <= 65) {
      this.humidityStatus = 'Sticky';
    }
    if (this.humidity > 65 && this.humidity <= 70) {
      this.humidityStatus = 'Uncomfortable';
    }
    if (this.humidity > 70 && this.humidity <= 75) {
      this.humidityStatus = 'Oppressive';
    }
    if (this.humidity > 75) {
      this.humidityStatus = 'Miserable';
    }

    // if (this.humidity >= 22) {
    //   this.vizHeight = parseInt((this.humidity * 0.76).toFixed(1));
    // }
  },
};
</script>

<style lang="scss" scoped>
.humidity-vizualization {
  position: relative;
  height: 80px;
  width: 30px;
  border: 2px solid #bdbbbb;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &__round {
    background-color: #66a0fd;
    width: 100%;
    border-radius: 10px;
  }
}
</style>
