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
    switch (true) {
      case this.humidity <= 50:
        this.humidityStatus = 'Dry';
        break;

      case this.humidity > 50 && this.humidity <= 55:
        this.humidityStatus = 'Pleasant';
        break;

      case this.humidity > 55 && this.humidity <= 60:
        this.humidityStatus = 'Comfortable';
        break;

      case this.humidity > 60 && this.humidity <= 65:
        this.humidityStatus = 'Sticky';
        break;

      case this.humidity > 65 && this.humidity <= 70:
        this.humidityStatus = 'Uncomfortable';
        break;

      case this.humidity > 70 && this.humidity <= 75:
        this.humidityStatus = 'Oppressive';
        break;

      case this.humidity > 75:
        this.humidityStatus = 'Miserable';
        break;
      default:
        break;
    }
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
