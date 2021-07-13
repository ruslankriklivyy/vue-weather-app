<template>
  <div class="current-weather">
    <img src="../assets/cloud.svg" alt="cloud svg" />
    <div class="current-weather__info">
      <div class="current-weather__info-degree">19 <span>°C</span></div>
      <div class="current-weather__info-day">Monday, <span>16:00</span></div>
      <div class="current-weather__info-temperature">Mostly Cloud</div>
      <div class="current-weather__info-percent">Rain - 30%</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.current-weather {
  img {
    display: block;
  }
  &__info {
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
    &-temperature {
    }
    &-percent {
    }
  }
}
</style>
