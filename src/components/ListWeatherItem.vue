<template>
  <div class="list-item">
    <div class="list-item__day">
      Mon
    </div>
    <div class="list-item__img">
      <img src="../assets/cloud.svg" alt="cloud svg" />
    </div>
    <div class="list-item__temperature">20° <span>6°</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list-item {
  text-align: center;
  padding: 15px;
  width: 150px;
  height: 190px;
  background: #fff;
  border-radius: 20px;

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
